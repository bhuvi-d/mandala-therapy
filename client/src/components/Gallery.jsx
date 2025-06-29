import React, { useState, useRef } from 'react';
import soothingMusic from '../assets/audio1.mp3';

const mandalas = [
  {
    id: 1,
    title: "Beginning",
    url: "https://res.cloudinary.com/dvsclqyjm/image/upload/v1751213748/img1_hzmflj.jpg"
  },
  {
    id: 2,
    title: "Asymmetry",
    url: "https://res.cloudinary.com/dvsclqyjm/image/upload/v1751213780/img2_vgg8ly.jpg"
  },
  {
    id: 3,
    title: "Void",
    url: "https://res.cloudinary.com/dvsclqyjm/image/upload/v1751213792/img3_okxf3p.jpg"
  },
];

const Gallery = () => {
  const [selectedMandala, setSelectedMandala] = useState(null);
  const audioRef = useRef(new Audio(soothingMusic));

  const handleOpen = (mandala) => {
    setSelectedMandala(mandala);
    audioRef.current.play().catch((err) => console.error("Audio failed", err));
  };

  const handleClose = () => {
    setSelectedMandala(null);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <>
      <div className="my-12 text-center px-4">
       <h2 className="text-4xl font-bold text-pink-700 dark:text-white mb-2">Mandala Gallery</h2>
       </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mandalas.map((mandala) => (
          <div
            key={mandala.id}
            onClick={() => handleOpen(mandala)}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300 cursor-pointer group bg-white dark:bg-gray-800"
          >
            <div className="relative w-full h-[360px] overflow-hidden">
            
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-32 h-32 bg-pink-300 opacity-30 rounded-full blur-2xl animate-pulse-slow"></div>
                <div className="w-20 h-20 bg-purple-300 opacity-40 rounded-full blur-2xl absolute animate-pulse-slower"></div>
              </div>

            
              <img
                src={mandala.url}
                alt={mandala.title}
                className="relative z-10 w-full h-full object-cover transform transition-transform duration-[4000ms] ease-linear group-hover:rotate-[360deg]"
              />
            </div>
            <div className="p-3 text-center text-lg font-semibold text-pink-700 dark:text-white">
              {mandala.title}
            </div>
          </div>
        ))}
      </div>

    
      {selectedMandala && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-6 overflow-y-auto">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white text-black text-5xl font-bold rounded-full w-14 h-14 flex items-center justify-center hover:bg-pink-500 hover:text-white shadow-lg transition duration-300"
              aria-label="Close modal"
            >
              &times;
            </button>

            <img
              src={selectedMandala.url}
              alt={selectedMandala.title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-xl mx-auto"
            />

            <div className="text-white text-center mt-4 text-xl font-semibold">
              {selectedMandala.title}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
