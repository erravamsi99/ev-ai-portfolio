import React from 'react';
import { motion } from 'framer-motion';

const CertificationsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Certifications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for certification items */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-600 dark:text-gray-300">
            No certifications added yet.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationsPage;