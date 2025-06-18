import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-100 dark:bg-gray-900 text-center py-6 mt-12 shadow-inner">
      <p className="text-gray-700 dark:text-gray-300 text-lg italic">
        “Happiness is everything” 
      </p>
      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Mandala Therapy by Bhuvi 💖
      </p>
    </footer>
  );
};

export default Footer;
