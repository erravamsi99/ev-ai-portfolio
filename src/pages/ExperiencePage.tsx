import React from 'react';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Professional Experience</h1>
      <div className="space-y-8">
        {/* Experience entries will be added here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Add your experience details here
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            This is a placeholder for your professional experience content.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperiencePage;