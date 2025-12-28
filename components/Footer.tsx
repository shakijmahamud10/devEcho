import React from 'react';
import { Github, Twitter, Linkedin, Mail, PhoneCall, Phone, PhoneCallIcon, LocationEdit, Locate, LocateFixed } from 'lucide-react';
import mainLogo from '../assets/main-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-secondary-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-secondary-900 dark:text-white font-bold text-xl">
              <div className="w-10 h-10   flex items-center justify-center">
                <img src={mainLogo} alt="devEcho Logo" />
              </div>
              <span className="text-2xl font-bold ">dev<span className="devecho-gradient-text">Echo</span></span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-6">
              We build elegant digital solutions through precision engineering and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-secondary-900 dark:text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors">AI & ML Solutions</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors">Cloud Architecture</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-secondary-900 dark:text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400 gap-2">
                <Mail className="w-4 h-4" />
                <span>devecho10@gmail.com</span>
              </li>
              <li className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <LocationEdit className="w-4 h-4" />
                <span>Dhaka, Bangladesh</span></li>
              <li className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>+8801645xxxxxx</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} devEcho. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;