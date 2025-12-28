import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
    service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="glass-panel p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent dark:from-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
                <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 border border-secondary-100 dark:border-gray-700">
                    <div className="text-secondary-900 dark:text-primary-400 group-hover:text-primary-600 transition-colors">
                        {service.icon}
                    </div>
                </div>
                <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200">{service.desc}</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-900 via-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    );
};
