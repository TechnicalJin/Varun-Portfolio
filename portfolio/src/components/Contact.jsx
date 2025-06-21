import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter, IoLogoFacebook } from 'react-icons/io5';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark/70">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ul className="space-y-6">
              {[
                { icon: <IoLocationOutline />, text: 'Surat, Gujarat, India', href: '#' },
                { icon: <IoCallOutline />, text: '+91 8140511538', href: 'tel:+8140511538' },
                { icon: <IoMailOutline />, text: 'akshatmehta220@gmail.com', href: 'mailto:akshatmehta220@gmail.com' },
                { icon: <IoLogoGithub />, text: 'GitHub Profile', href: 'https://github.com/AkshatBytes' },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <span className="text-primary text-2xl mr-4">{item.icon}</span>
                  <a href={item.href} className="text-light hover:text-primary relative group">
                    {item.text}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-8">
              {[
                { href: 'https://www.linkedin.com/in/akshat-mehta-012250258', icon: <IoLogoLinkedin /> },
                { href: 'https://www.instagram.com/akshat._mehta', icon: <IoLogoInstagram /> },
                { href: 'https://twitter.com', icon: <IoLogoTwitter /> },
                { href: 'https://www.facebook.com/share/18GN2QBXhv/', icon: <IoLogoFacebook /> },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-light hover:bg-primary hover:text-white transition-all"
                  whileHover={{ y: -5 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.form
            className="card p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-light focus:outline-none focus:border-primary"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-light focus:outline-none focus:border-primary"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-light focus:outline-none focus:border-primary resize-y min-h-[150px]"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
            {formStatus && (
              <p className={`mt-4 text-center ${formStatus.includes('success') ? 'text-success' : 'text-red-500'}`}>
                {formStatus}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;