import React, { useState } from 'react';
import { generateProjectEstimation } from '../services/geminiService';
import { ProjectEstimation } from '../types';
import { Loader2, Zap, Clock, Layers, BarChart, CheckCircle2, AlertCircle } from 'lucide-react';

const AIEstimator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProjectEstimation | null>(null);
  const [error, setError] = useState('');

  const handleEstimate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError('');
    setResult(null);
    
    try {
      const data = await generateProjectEstimation(prompt);
      setResult(data);
    } catch (err) {
      setError('Failed to generate estimation. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-2xl mb-6 border border-primary-200 dark:border-primary-500/30">
                <Zap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-4xl font-bold text-secondary-900 dark:text-white mb-4">AI Project Estimator</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Describe your software idea in plain English. Our AI Solution Architect will break it down, suggest a tech stack, and estimate the timeline instantly.
            </p>
        </div>

        <div className="bg-white dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 mb-12 shadow-xl shadow-gray-200/50 dark:shadow-none">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Describe your project
            </label>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g. I want a mobile app for dog walkers where users can book walks, track GPS location in real-time, and pay via credit card..."
                className="w-full h-40 bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-xl p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none mb-6"
            />
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 hidden sm:block">Powered by Gemini</p>
                <button
                    onClick={handleEstimate}
                    disabled={loading || !prompt.trim()}
                    className={`flex items-center justify-center px-8 py-3 rounded-lg font-medium text-white transition-all ${
                        loading || !prompt.trim() 
                        ? 'bg-gray-400 dark:bg-gray-700 cursor-not-allowed opacity-50' 
                        : 'bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/25'
                    }`}
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Analyzing Requirements...
                        </>
                    ) : (
                        <>
                            Generate Estimation
                            <Zap className="w-5 h-5 ml-2" />
                        </>
                    )}
                </button>
            </div>
            {error && (
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg flex items-center text-red-600 dark:text-red-400">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {error}
                </div>
            )}
        </div>

        {result && (
            <div className="animate-slide-up space-y-6">
                {/* Result Header */}
                <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-none">
                    <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">{result.title}</h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{result.summary}</p>
                            </div>
                            <div className="hidden md:flex flex-col items-end">
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Complexity</div>
                                <div className="flex items-center gap-1">
                                    {[...Array(10)].map((_, i) => (
                                        <div 
                                            key={i} 
                                            className={`w-2 h-6 rounded-sm ${i < result.complexityScore ? 'bg-primary-500' : 'bg-gray-200 dark:bg-gray-700'}`} 
                                        />
                                    ))}
                                </div>
                                <div className="text-right text-xs text-primary-600 dark:text-primary-400 mt-1">{result.complexityScore}/10</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700 bg-gray-50 dark:bg-gray-900/30">
                        <div className="p-6">
                            <div className="flex items-center text-primary-600 dark:text-primary-400 mb-4">
                                <Clock className="w-5 h-5 mr-2" />
                                <h3 className="font-semibold uppercase tracking-wide text-sm">Estimated Timeline</h3>
                            </div>
                            <p className="text-3xl font-bold text-secondary-900 dark:text-white">{result.estimatedTimelineWeeks}</p>
                            <p className="text-sm text-gray-500 mt-1">Based on MVP scope</p>
                        </div>
                        <div className="p-6 md:col-span-2">
                             <div className="flex items-center text-primary-600 dark:text-primary-400 mb-4">
                                <Layers className="w-5 h-5 mr-2" />
                                <h3 className="font-semibold uppercase tracking-wide text-sm">Recommended Tech Stack</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {result.recommendedTechStack.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-lg shadow-gray-200/50 dark:shadow-none">
                     <div className="flex items-center text-primary-600 dark:text-primary-400 mb-6">
                        <BarChart className="w-5 h-5 mr-2" />
                        <h3 className="font-semibold uppercase tracking-wide text-sm">Key Deliverables (MVP)</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {result.keyFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800/50">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm leading-snug">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-500/20 rounded-xl p-6 text-center">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        This is an AI-generated estimation. Ready to discuss specific requirements with our team?
                    </p>
                    <button className="px-6 py-2 bg-secondary-900 dark:bg-white text-white dark:text-secondary-900 font-bold rounded-lg hover:bg-secondary-800 dark:hover:bg-gray-100 transition-colors">
                        Book a Free Consultation
                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default AIEstimator;