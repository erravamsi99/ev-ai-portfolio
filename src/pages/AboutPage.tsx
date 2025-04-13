import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Welcome to my portfolio! I am a passionate developer dedicated to creating 
            innovative solutions and delivering high-quality software.
          </p>
          {/* Placeholder content - replace with actual content */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              My Journey
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              With a strong foundation in modern web technologies and a commitment to 
              continuous learning, I strive to build applications that make a difference.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;