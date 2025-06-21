import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdMenu, IoMdClose, IoMdArrowUp } from 'react-icons/io';

const Header = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: './assets/Akshat_Resume.pdf', download: true },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 w-full py-4 bg-dark/80 backdrop-blur-lg z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="font-space-grotesk text-2xl font-bold text-light">
            Akshat Mehta<span className="text-primary">.</span>
          </a>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-space-grotesk text-light hover:text-primary transition-colors duration-300 relative group"
                download={item.download}
              >
                {item.name}
                <span className="absolute bottom-0 left-50 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <motion.nav
          className={`fixed top-0 right-0 h-screen w-64 bg-dark md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
        >
          <ul className="flex flex-col p-8 space-y-4 mt-16">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="font-space-grotesk text-light hover:text-primary transition-colors duration-300"
                  download={item.download}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </motion.header>

      {/* Theme Toggle and Back to Top */}
      <motion.div
        className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-lg"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          <IoMdArrowUp className={`transform ${theme === 'dark' ? 'rotate-0' : 'rotate-180'}`} />
        </button>
        <button
          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <IoMdArrowUp />
        </button>
      </motion.div>
    </>
  );
};

export default Header;