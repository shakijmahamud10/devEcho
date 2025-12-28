import React from 'react';
import { Code, Smartphone, Database, Zap, Search, Figma, GitBranch, Zap as ZapLaunch, Clock, Users, Lock, TrendingUp, Award, MessageSquare } from 'lucide-react';
import { Service, Project, Testimonial } from '../types';

export const services: Service[] = [
    {
        title: 'Custom Software',
        desc: 'Tailor-made solutions that fit your business processes perfectly, scalable and secure.',
        icon: React.createElement(Code, { className: "w-6 h-6 text-primary-600 dark:text-primary-400" })
    },
    {
        title: 'Mobile Development',
        desc: 'Native and cross-platform mobile apps providing seamless user experiences on iOS and Android.',
        icon: React.createElement(Smartphone, { className: "w-6 h-6 text-primary-600 dark:text-primary-400" })
    },
    {
        title: 'AI Integration',
        desc: 'Leverage the power of Large Language Models and Machine Learning to automate and innovate.',
        icon: React.createElement(Zap, { className: "w-6 h-6 text-primary-600 dark:text-primary-400" })
    },
    {
        title: 'Cloud Infrastructure',
        desc: 'Robust, scalable, and cost-effective cloud architectures on AWS, Google Cloud, or Azure.',
        icon: React.createElement(Database, { className: "w-6 h-6 text-primary-600 dark:text-primary-400" })
    }
];

export const projects: Project[] = [
    {
        title: "FinTech Dashboard",
        category: "Web Application",
        image: "https://picsum.photos/800/600?random=1",
        tags: ["React", "Node.js", "D3.js"]
    },
    {
        title: "HealthTrack Mobile",
        category: "iOS & Android",
        image: "https://picsum.photos/800/600?random=2",
        tags: ["React Native", "Firebase"]
    },
    {
        title: "E-Commerce Scale",
        category: "Platform Engineering",
        image: "https://picsum.photos/800/600?random=3",
        tags: ["Next.js", "Shopify Plus"]
    }
];

export const processSteps = [
    {
        step: "01",
        title: "Discovery & Strategy",
        desc: "We dive deep into your business goals, user needs, and technical requirements to build a comprehensive roadmap.",
        icon: React.createElement(Search, { className: "w-8 h-8" })
    },
    {
        step: "02",
        title: "Design & Prototyping",
        desc: "Visualizing the solution with high-fidelity wireframes and interactive prototypes for user feedback and validation.",
        icon: React.createElement(Figma, { className: "w-8 h-8" })
    },
    {
        step: "03",
        title: "Agile Development",
        desc: "Iterative coding sprints with regular updates, ensuring transparency and flexibility throughout the journey.",
        icon: React.createElement(GitBranch, { className: "w-8 h-8" })
    },
    {
        step: "04",
        title: "Launch & Scale",
        desc: "Rigorous testing, smooth deployment, and ongoing support to help your product grow and scale seamlessly.",
        icon: React.createElement(ZapLaunch, { className: "w-8 h-8" })
    }
];

export const industries = [
    { name: "FinTech", desc: "Secure payment systems, trading platforms, and financial dashboards." },
    { name: "HealthTech", desc: "Patient management, telemedicine, and health tracking solutions." },
    { name: "E-commerce", desc: "Scalable online stores with advanced inventory and payment systems." },
    { name: "SaaS", desc: "Multi-tenant platforms with analytics and user management." },
    { name: "Logistics", desc: "Real-time tracking, optimization, and fleet management." },
    { name: "EdTech", desc: "Learning platforms, course management, and student analytics." }
];

export const testimonials: Testimonial[] = [
    {
        quote: "devEcho transformed our vision into reality. Their team's expertise and dedication were unmatched.",
        author: "Sarah Johnson",
        role: "CEO, TechVentures",
        rating: 5
    },
    {
        quote: "Best decision we made was partnering with devEcho. They delivered ahead of schedule and with amazing quality.",
        author: "Marcus Chen",
        role: "Founder, FinFlow",
        rating: 5
    },
    {
        quote: "Professional, responsive, and incredibly skilled. Highly recommend devEcho for any software project.",
        author: "Emily Davis",
        role: "Product Manager, GrowthLabs",
        rating: 5
    }
];

export const competitiveAdvantages = [
    { icon: React.createElement(Clock, { className: "w-8 h-8" }), title: "Faster Time-to-Market", desc: "Agile sprints get your product live in weeks, not months." },
    { icon: React.createElement(Users, { className: "w-8 h-8" }), title: "Dedicated Teams", desc: "Engineers who stay with your project from start to finish." },
    { icon: React.createElement(Lock, { className: "w-8 h-8" }), title: "Enterprise Security", desc: "GDPR, SOC 2, and ISO compliance built into every project." },
    { icon: React.createElement(TrendingUp, { className: "w-8 h-8" }), title: "Scalability Built-In", desc: "Architecture designed to handle growth and increasing demands." },
    { icon: React.createElement(Award, { className: "w-8 h-8" }), title: "Quality Assurance", desc: "Rigorous testing and code reviews ensure excellence." },
    { icon: React.createElement(MessageSquare, { className: "w-8 h-8" }), title: "Transparent Communication", desc: "Weekly updates, demos, and open dialogue throughout." }
];

export const teamStats = [
    { role: "Senior Full-Stack Engineers", count: "8+", expertise: "4+ years of experience building enterprise applications" },
    { role: "Product & UX Designers", count: "5+", expertise: "Creating intuitive and beautiful user experiences" },
    { role: "DevOps & Cloud Architects", count: "1+", expertise: "Ensuring scalability, security, and performance" }
];

export const stats = [
    { label: "Projects Delivered", value: "150+" },
    { label: "Client Retention", value: "98%" },
    { label: "Team Experts", value: "45+" },
    { label: "Years Experience", value: "10+" }
];
