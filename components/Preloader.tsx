import React from 'react';
import mainLogo from '../assets/main-logo.png';

const Preloader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-secondary-900 transition-colors duration-300">
            <div className="relative flex items-center justify-center mb-8">
                {/* Pulsing blurred background */}
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ width: '150px', height: '150px' }}></div>

                {/* Logo Container with floating animation */}
                <div className="relative z-10 w-24 h-24 animate-float">
                    <img src={mainLogo} alt="devEcho Logo" className="w-full h-full object-contain drop-shadow-lg" />
                </div>
            </div>

            {/* Brand Text */}
            <div className="text-center overflow-hidden">
                <h1 className="text-3xl font-bold mb-2 animate-slide-up">
                    <span className="text-secondary-900 dark:text-white">dev</span>
                    <span className="devecho-gradient-text">Echo</span>
                </h1>

                {/* Loading Bar */}
                <div className="w-48 h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mt-4 mx-auto">
                    <div className="h-full bg-gradient-to-r from-secondary-900 via-primary-500 to-secondary-900 animate-loading-bar w-full origin-left"></div>
                </div>
            </div>

            <style>{`
                @keyframes loading-bar {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0%); }
                    100% { transform: translateX(100%); }
                }
                .animate-loading-bar {
                    animation: loading-bar 1.5s infinite linear;
                }
            `}</style>
        </div>
    );
};

export default Preloader;
