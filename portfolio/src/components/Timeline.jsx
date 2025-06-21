import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  { period: '2025 – Present', title: 'AI News Summarizer & Sentiment Analyzer', address: 'Role: NLP Developer & Full-Stack Integrator' },
  { period: '2025', title: 'Wrong Posture Muscle Strain Detector (IoT)', address: 'For College Project' },
  { period: '2025', title: 'Collabease', address: 'Role: Frontend Practice' },
  { period: '2024', title: 'Spades Card Game (Java)', address: 'Role: Practice for Java' },
  { period: '2024', title: 'Task Management System', address: 'Role: Frontend Web Developer' },
  { period: '2024', title: 'IoT News Summarizer', address: 'Role: Backend Developer' },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Timeline</p>
          <h2 className="section-title">Project Experience</h2>
          <p className="text-gray mt-4 max-w-2xl mx-auto">
            A journey through my recent projects and professional milestones.
          </p>
        </motion.div>
        <div className="relative mt-12">
          <div className="absolute left-1/2 w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2 h-full"></div>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 w-1/2 ${index % 2 === 0 ? 'left-0 pr-12 text-right' : 'left-1/2 pl-12'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary -translate-y-1/2 shadow-lg" style={{ [index % 2 === 0 ? 'right' : 'left']: '-0.75rem' }}></div>
              <div className="card p-6">
                <h3 className="font-space-grotesk text-primary">{item.period}</h3>
                <p className="font-space-grotesk text-lg text-light">{item.title}</p>
                <p className="text-gray">{item.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;