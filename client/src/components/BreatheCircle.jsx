import React, { useEffect, useState } from 'react';

const BreatheCircle = () => {
  const [phase, setPhase] = useState('INHALE');

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase('INHALE');
      const exhaleTimeout = setTimeout(() => {
        setPhase('EXHALE');
      }, 2000); 
      return () => clearTimeout(exhaleTimeout);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center my-10">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full bg-pink-300 dark:bg-pink-500 opacity-70 animate-breathe" />
        <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-800 shadow-inner flex items-center justify-center text-pink-700 dark:text-white font-semibold text-xl transition-opacity duration-700 ease-in-out">
          {phase}
        </div>
      </div>
    </div>
  );
};

export default BreatheCircle;
