import React, { useState, useCallback } from 'react';
import { Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { RSVPFormData } from '../types';
import { generateWeddingWish } from '../services/geminiService';

export const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: '',
    email: '',
    attending: null,
    dietaryRestrictions: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // AI Helper State
  const [showAiHelper, setShowAiHelper] = useState(false);
  const [aiRelationship, setAiRelationship] = useState('');
  const [aiTone, setAiTone] = useState<'heartfelt' | 'funny' | 'short' | 'formal'>('heartfelt');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAttendanceChange = (value: 'yes' | 'no') => {
    setFormData(prev => ({ ...prev, attending: value }));
  };

  // Validation logic
  const isFormValid = Boolean(
    formData.attending && 
    formData.fullName.trim() !== '' && 
    formData.email.trim() !== ''
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    // Prepare payload matching the requested Google Sheet columns:
    // 1. Submission Date
    // 2. Full Name
    // 3. Email
    // 4. Dietary Restrictions
    // 5. RSVP (Joyfully Accept / Regretfully Decline)
    // 6. Message
    const payload = {
      submissionDate: new Date().toLocaleString(),
      fullName: formData.fullName,
      email: formData.email,
      dietaryRestrictions: formData.dietaryRestrictions || '',
      rsvp: formData.attending === 'yes' ? 'Joyfully Accept' : 'Regretfully Decline',
      message: formData.message || ''
    };

    try {
      // Deployed Google Apps Script Web App URL.
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxuzaFQXq6WqsNDavpClI7XHG3Nu8KJtyLL3JrM_DPwr2FI_j6Xu4SutOsAvPmYQKgFNg/exec"; 

      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Important for calling Apps Script from the browser
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
      } else {
        // Simulation for when the script URL is not yet configured
        console.log("Simulating Google Sheet submission:", payload);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert("There was a problem sending your RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAiGenerate = useCallback(async () => {
    if (!aiRelationship) return;
    setIsGenerating(true);
    const wish = await generateWeddingWish(aiRelationship, aiTone);
    setFormData(prev => ({ ...prev, message: wish }));
    setIsGenerating(false);
    setShowAiHelper(false);
  }, [aiRelationship, aiTone]);

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 bg-white min-h-[600px] flex items-center justify-center">
        <div className="text-center px-6 max-w-lg">
          <div className="w-20 h-20 bg-sage-200 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
             <Send className="text-sage-700 w-10 h-10" />
          </div>
          <h2 className="font-serif text-4xl text-stone-800 mb-4">Thank You!</h2>
          <p className="font-sans text-stone-600 text-lg font-light mb-8">
            Your RSVP has been received. We can't wait to celebrate with you!
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-sage-600 border-b border-sage-400 hover:text-sage-800 text-sm tracking-widest uppercase pb-1"
          >
            Submit another response
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sage-600 font-sans text-xs tracking-[0.2em] uppercase">Kindly Reply</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4">
            RSVP
          </h2>
          <p className="font-sans text-stone-500 mt-4 font-light">
            Please respond by 31 May 2026
          </p>
        </div>

        <div className="bg-sage-50 p-8 md:p-12 rounded-2xl shadow-xl shadow-sage-200/50">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Attendance Toggle */}
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={() => handleAttendanceChange('yes')}
                className={`px-8 py-3 rounded-full font-sans text-sm tracking-widest uppercase transition-all ${
                  formData.attending === 'yes' 
                    ? 'bg-sage-600 text-white shadow-md' 
                    : 'bg-white text-stone-500 hover:bg-sage-100 border border-sage-200'
                }`}
              >
                Joyfully Accept
              </button>
              <button
                type="button"
                onClick={() => handleAttendanceChange('no')}
                className={`px-8 py-3 rounded-full font-sans text-sm tracking-widest uppercase transition-all ${
                  formData.attending === 'no' 
                    ? 'bg-stone-600 text-white shadow-md' 
                    : 'bg-white text-stone-500 hover:bg-sage-100 border border-sage-200'
                }`}
              >
                Regretfully Decline
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-stone-500 mb-2">Full Name <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border-b border-stone-300 py-2 text-stone-800 focus:outline-none focus:border-sage-500 transition-colors bg-transparent placeholder-stone-400 font-serif text-xl"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-stone-500 mb-2">Email Address <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b border-stone-300 py-2 text-stone-800 focus:outline-none focus:border-sage-500 transition-colors bg-transparent placeholder-stone-400 font-serif text-xl"
                  placeholder="john@example.com"
                />
              </div>

              {formData.attending === 'yes' && (
                <div className="animate-in fade-in slide-in-from-top-4">
                  <label className="block font-sans text-xs uppercase tracking-wider text-stone-500 mb-2">Dietary Restrictions</label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    className="w-full border-b border-stone-300 py-2 text-stone-800 focus:outline-none focus:border-sage-500 transition-colors bg-transparent placeholder-stone-400 font-serif text-xl"
                    placeholder="e.g. Vegetarian, Nut Allergy"
                  />
                </div>
              )}

              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="block font-sans text-xs uppercase tracking-wider text-stone-500">Message to the Couple</label>
                  <button 
                    type="button"
                    onClick={() => setShowAiHelper(!showAiHelper)}
                    className="text-xs text-gold-500 flex items-center gap-1 hover:text-gold-400 transition-colors"
                  >
                    <Sparkles size={14} /> AI Writing Assistant
                  </button>
                </div>
                
                {/* AI Assistant Panel */}
                {showAiHelper && (
                  <div className="bg-white p-4 rounded-lg mb-4 border border-sage-200 animate-in zoom-in-95 shadow-sm">
                    <h4 className="font-serif text-lg text-stone-700 mb-3">Let AI help you write a wish</h4>
                    <div className="space-y-3">
                      <input 
                        type="text" 
                        placeholder="How do you know them? (e.g. College roommate)"
                        className="w-full p-2 text-sm border border-stone-200 rounded focus:border-sage-400 outline-none"
                        value={aiRelationship}
                        onChange={(e) => setAiRelationship(e.target.value)}
                      />
                      <select 
                        className="w-full p-2 text-sm border border-stone-200 rounded focus:border-sage-400 outline-none bg-white"
                        value={aiTone}
                        onChange={(e) => setAiTone(e.target.value as any)}
                      >
                        <option value="heartfelt">Heartfelt</option>
                        <option value="funny">Funny</option>
                        <option value="short">Short & Sweet</option>
                        <option value="formal">Formal</option>
                      </select>
                      <button
                        type="button"
                        onClick={handleAiGenerate}
                        disabled={!aiRelationship || isGenerating}
                        className="w-full bg-stone-800 text-white py-2 rounded text-xs uppercase tracking-widest hover:bg-stone-700 disabled:opacity-50 flex justify-center items-center gap-2"
                      >
                        {isGenerating ? <Loader2 className="animate-spin w-4 h-4" /> : 'Generate Message'}
                      </button>
                    </div>
                  </div>
                )}

                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-stone-300 rounded-lg p-3 text-stone-800 focus:outline-none focus:border-sage-500 transition-colors bg-white/50 placeholder-stone-400 font-serif text-lg resize-none"
                  placeholder="Share a memory or wish..."
                />
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-sage-600 text-white py-4 rounded-full font-sans text-sm uppercase tracking-[0.2em] hover:bg-sage-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transform active:scale-[0.99] flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5 mr-2" />
                    Sending...
                  </>
                ) : (
                  "Send RSVP"
                )}
              </button>
              
              {!isFormValid && (
                <div className="flex items-center justify-center gap-2 text-stone-500 animate-in fade-in">
                  <AlertCircle size={16} className="text-stone-400" />
                  <p className="font-sans text-xs">
                    {!formData.attending 
                      ? "Please select 'Joyfully Accept' or 'Regretfully Decline'"
                      : "Please fill in your full name and email"
                    }
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};