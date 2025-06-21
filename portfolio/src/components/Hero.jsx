import React from 'react';
import { motion } from 'framer-motion';
import { IoMdArrowDown } from 'react-icons/io';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Hello, I'm</p>
          <h1 className="font-space-grotesk text-5xl font-bold text-light">
            Akshat <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Creative Developer</span>
          </h1>
          <p className="text-gray mt-4">
            I create innovative digital experiences by blending cutting-edge technology with creative design.
          </p>
          <ul className="mt-6 space-y-4">
            {['Web Development', 'AI & Machine Learning', 'UI/UX Graphic Design'].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <a href="#" className="text-light hover:text-primary flex items-center group">
                  <span>{item}</span>
                  <IoMdArrowDown className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="flex space-x-8 mt-6">
            <div>
              <strong className="font-space-grotesk text-3xl text-primary">7+</strong>
              <p className="text-gray">Tech Stack</p>
            </div>
            <div>
              <strong className="font-space-grotesk text-3xl text-primary">5+</strong>
              <p className="text-gray">Projects</p>
            </div>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="#contact" className="btn">Get in Touch</a>
            <a href="#portfolio" className="p-3 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all">
              <IoMdArrowDown size={24} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="absolute md:right-8 top-1/2 transform md:-translate-y-1/2 mt-12 md:mt-0 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}
        >
          <img src="images/AkshatPortfolio2.jpg" alt="Akshat Mehta" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;