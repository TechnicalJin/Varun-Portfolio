import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-dark/90 py-8 text-center border-t border-white/5">
      <div className="container mx-auto px-4">
        <p className="text-gray">
          © 2025. All rights reserved by{' '}
          <a href="#" className="text-primary hover:underline">codewithVarun</a>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {[
            { href: 'https://www.linkedin.com/in/jinjala-varun-2a11182b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: <IoLogoLinkedin /> },
            { href: 'https://www.instagram.com/_varun__.098/', icon: <IoLogoInstagram /> },
            { href: 'https://github.com/TechnicalJin', icon: <IoLogoGithub /> },
            { href: 'https://www.facebook.com/share/18GN2QBXhv/', icon: <IoLogoFacebook /> },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              className="text-light hover:text-primary"
              whileHover={{ y: -5 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;