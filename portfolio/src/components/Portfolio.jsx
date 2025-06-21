import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdArrowDown } from 'react-icons/io';

const projectsData = [
  {
    id: 1,
    category: 'Web',
    title: 'Task Management System',
    description: 'A web-based task manager to add, update, delete, and track progress of personal or team tasks in real-time.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/TechnicalJin/Card-Game',
    role: 'Frontend Web Developer',
  },
  {
    id: 2,
    category: 'JAVA',
    title: 'Dijkstra-Algorithm',
    description: 'A web app that summarizes latest news articles using NLP and provides sentiment analysis.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    tech: ['Python', 'Flask', 'HuggingFace', 'React'],
    github: 'https://github.com/TechnicalJin/Dijkstra-Algorithm',
    role: 'NLP Developer & Full-Stack Integrator',
  },
  {
    id: 3,
    category: 'JAVA-HTML',
    title: 'KMP-String_Matching-Algorithm',
    description: 'A smart device that detects incorrect sitting posture using an MPU6050 sensor and alerts users to prevent muscle strain.',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    tech: ['ESP32', 'MPU6050', 'Arduino', 'IoT'],
    github: 'https://github.com/TechnicalJin/KMP-String_Matching-Algorithm',
    role: 'IoT Developer',
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-dark/70">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">My Projects</p>
          <h2 className="section-title">Featured Works</h2>
          <p className="text-gray mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently. Each project reflects my passion for creating innovative solutions.
          </p>
        </motion.div>
        <div className="flex justify-center space-x-4 mt-6">
          {['All', 'Web', 'AI', 'IoT'].map((category, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full font-space-grotesk ${filter === category ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-transparent border border-gray text-gray hover:bg-primary hover:text-white'}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)' }}
              onClick={() => setModalProject(project)}
            >
              <div className="relative h-60 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
              </div>
              <div className="p-6">
                <h3 className="font-space-grotesk text-xl text-light">{project.title}</h3>
                <p className="text-gray mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <a href={project.github} target="_blank" className="btn mt-4 inline-flex items-center">
                  View on GitHub <IoMdArrowDown className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Project Modal */}
        <AnimatePresence>
          {modalProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
            >
              <motion.div
                className="bg-dark/90 p-8 rounded-2xl max-w-2xl w-full mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <img src={modalProject.image} alt={modalProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="font-space-grotesk text-2xl text-light">{modalProject.title}</h3>
                <p className="text-gray mt-2">{modalProject.description}</p>
                <p className="text-gray mt-2"><strong>Role:</strong> {modalProject.role}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {modalProject.tech.map((tech, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <a href={modalProject.github} target="_blank" className="btn">View on GitHub</a>
                  <button className="ml-4 text-gray hover:text-primary" onClick={() => setModalProject(null)}>
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;