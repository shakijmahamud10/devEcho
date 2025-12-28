import React from 'react';

export interface ProjectEstimation {
  title: string;
  summary: string;
  recommendedTechStack: string[];
  estimatedTimelineWeeks: string;
  keyFeatures: string[];
  complexityScore: number; // 1-10
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Service {
  title: string;
  desc: string;
  icon: JSX.Element;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}
