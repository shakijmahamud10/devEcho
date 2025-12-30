import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AIEstimator from './pages/AIEstimator';
import Preloader from './components/Preloader';


import Contact from './pages/Contact';

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // Disable smooth scrolling for instant jump on route change
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);

    // Re-enable smooth scrolling after the layout has settled
    // Using a microtask or small timeout ensures the scroll happened instantly
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-secondary-50 dark:bg-secondary-900 text-secondary-900 dark:text-gray-50 transition-colors duration-300 animate-fade-in">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estimator" element={<AIEstimator />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
};

export default App;