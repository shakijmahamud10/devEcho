import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="glass-panel p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent dark:from-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
                <div className="aspect-video w-full overflow-hidden rounded-xl mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                <div className="mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                    <span className="text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest">{project.category}</span>
                </div>

                <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">{project.title}</h4>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-900 via-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    );
};
