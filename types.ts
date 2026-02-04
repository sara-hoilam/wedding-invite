import React from 'react';

export interface RSVPFormData {
  fullName: string;
  email: string;
  attending: 'yes' | 'no' | null;
  dietaryRestrictions: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}