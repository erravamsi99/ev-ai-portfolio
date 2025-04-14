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
          <div className="prose dark:prose-invert max-w-none">
          
 <p className="text-lg text-gray-700 dark:text-gray-300">
Hi, I'm Erra Vamsi — an AI Engineer and Software Developer passionate about building intelligent, scalable, and impactful solutions.
 </p> <p className="text-lg text-gray-700 dark:text-gray-300">
I'm currently pursuing dual degrees at IIT Madras (B.S. in Data Science and Applications) and NIT Durgapur (B.Tech in Civil Engineering), combining a strong academic foundation with real-world experience.
 </p> <p className="text-lg text-gray-700 dark:text-gray-300">
At Soul AI, I worked on training large-scale LLMs with human feedback using reinforcement learning. Previously, I interned at NIT Durgapur, where I developed a semi-supervised Mixture Density Network to predict water quality parameters from satellite data with over 95% accuracy.
</p> <p className="text-lg text-gray-700 dark:text-gray-300">
My technical toolkit includes Python, JavaScript, C++, and frameworks like React, Node.js, Django, along with deep learning tools like TensorFlow, PyTorch, and OpenAI APIs. I’m also experienced with Docker, Kubernetes, and building end-to-end AI pipelines.
</p> <p className="text-lg text-gray-700 dark:text-gray-300">
I’ve solved over 600+ LeetCode problems, secured an All India Rank of 55 in Naukri’s Campus EROH, and have led development projects that won hackathons and funding from programs like Xartup.
</p> <p className="text-lg text-gray-700 dark:text-gray-300">
I bring a mix of competitive coding discipline, deep AI intuition, and full-stack engineering prowess to everything I build.
            </p>
          </div>
          {/* Placeholder content - replace with actual content */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              My Journey
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
