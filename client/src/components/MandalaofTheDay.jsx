import React, { useState } from 'react';
import MandalaColoringPopup from './MandalaColouringPopup'; 

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

const getMandalaOfTheDay = (mandalas) => {
  const today = new Date().toISOString().slice(0, 10);
  const seed = [...today].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = seed % mandalas.length;
  return mandalas[index];
};

const MandalaOfTheDay = () => {
  const [showColoring, setShowColoring] = useState(false);
  const mandala = getMandalaOfTheDay(mandalas);
  const today = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="my-12 text-center px-4">
      <h2 className="text-4xl font-bold text-pink-700 dark:text-white mb-2">Mandala of the Day</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 italic text-lg">for {today}</p>

      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] bg-white dark:bg-gray-800">
        <div className="w-full aspect-square md:aspect-[4/3]">
          <img
            src={mandala.url}
            alt={mandala.title}
            className="w-full h-full object-contain"
          />
          <button
            onClick={() => setShowColoring(true)}
            className="mt-6 bg-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-600 transition"
          >
            Mandala Colouring Mode
          </button>

          {showColoring && (
            <MandalaColoringPopup
              mandalaUrl={mandala.url} 
              onClose={() => setShowColoring(false)}
            />
          )}
        </div>
        <div className="p-6 text-2xl font-semibold text-pink-700 dark:text-white bg-pink-50 dark:bg-gray-900">
          {mandala.title}
        </div>
      </div>
    </div>
  );
};

export default MandalaOfTheDay;
