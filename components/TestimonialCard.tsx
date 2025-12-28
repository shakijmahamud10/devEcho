import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="glass-panel p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent dark:from-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-primary-500 w-4 h-4">★</span>
                    ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed relative">
                    <span className="text-4xl text-primary-200 dark:text-primary-800/50 absolute -top-4 -left-2 font-serif">"</span>
                    <span className="relative z-10">{testimonial.quote}</span>
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.author.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold text-secondary-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">{testimonial.author}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{testimonial.role}</div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-900 via-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    );
};
