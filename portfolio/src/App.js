import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen">
      {/* Preloader */}
      <motion.div
        className="fixed inset-0 bg-dark flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onAnimationComplete={() => document.querySelector('.preloader').style.display = 'none'}
      >
        <div className="w-16 h-16 border-4 border-t-primary border-gray-700 rounded-full animate-spin"></div>
      </motion.div>

      {/* Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 blur-sm"
            style={{
              width: [120, 80, 60, 40, 20][i],
              height: [120, 80, 60, 40, 20][i],
              top: [10, 70, 30, 85, 60][i] + '%',
              left: [5, 80, 90, 15, 40][i] + '%',
            }}
            animate={{
              x: [0, 20, 40, 20, 0],
              y: [0, 40, 0, -40, 0],
              rotate: 360,
            }}
            transition={{ duration: [25, 20, 18, 15, 12][i], repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;