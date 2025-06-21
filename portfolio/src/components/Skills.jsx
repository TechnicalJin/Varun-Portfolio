import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaServer, FaRobot, FaMicrochip, FaGitAlt, FaDocker } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Frontend',
    icon: <FaHtml5 />,
    title: 'Frontend Development',
    description: 'HTML5, CSS3, JavaScript, React, Tailwind CSS, Responsive Design',
  },
  {
    category: 'Backend',
    icon: <FaServer />,
    title: 'Backend Development',
    description: 'Node.js, Express, Django, Flask, RESTful APIs',
  },
  {
    category: 'AI & ML',
    icon: <FaRobot />,
    title: 'AI & Machine Learning',
    description: 'Python, TensorFlow, HuggingFace, NLP, Sentiment Analysis',
  },
  {
    category: 'IoT',
    icon: <FaMicrochip />,
    title: 'IoT Development',
    description: 'Arduino, ESP32, Sensor Integration, IoT Dashboards',
  },
  {
    category: 'Tools',
    icon: <FaGitAlt />,
    title: 'Dev Tools',
    description: 'Git, Docker, Vite, Webpack, VS Code',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Skills</p>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="text-gray mt-4 max-w-2xl mx-auto">
            Through real-world projects in AI, IoT, and full-stack development, I've gained practical expertise in various technologies.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="text-5xl text-primary mb-4">{skill.icon}</div>
              <h3 className="font-space-grotesk text-lg text-light">{skill.title}</h3>
              <p className="text-gray mt-2">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;