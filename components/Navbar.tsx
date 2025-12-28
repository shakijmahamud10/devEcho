import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Rocket, Sun, Moon } from 'lucide-react';
import mainLogo from '../assets/main-logo.png';



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Work', path: '/#work' },
    { name: 'Contact', path: '/contact' },
    { name: 'AI Estimator', path: '/estimator', highlight: true },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path === '/') {
      // Handle Home link - scroll to top
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      if (location.pathname === '/') {
        scrollToSection(id);
      } else {
        navigate('/', { state: { scrollTo: id } });
      }
    } else {
      navigate(path);
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      // Small timeout to allow render
      setTimeout(() => {
        scrollToSection(id);
        // Clear state
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-secondary-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-secondary-900 dark:text-white font-bold text-xl">
              <div className="w-10 h-10   flex items-center justify-center">
                <img src={mainLogo} alt="devEcho Logo" />
              </div>
              <span className="text-2xl font-bold ">dev<span className="devecho-gradient-text">Echo</span></span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <span key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.path);
                    }}
                    className={`px-3 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer  ${link.highlight
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    {link.name}
                  </a>
                </span>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors hidden"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors hidden"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-secondary-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <span key={link.name} className="block">
                <a
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${link.highlight
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                >
                  {link.name}
                </a>
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;