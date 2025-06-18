import React from 'react';

const MusicPlayer = () => {
  return (
    <div className="my-8">
  <div className="my-12 text-center px-4">
    <h2 className="text-4xl font-bold text-pink-700 dark:text-white mb-2">Relaxing Sounds</h2>
  </div>
  <div className="flex justify-center">
    <div className="bg-[#8b104e] p-2 rounded-2xl shadow-lg w-[90%] md:w-[60%]">
      <iframe
        src="https://open.spotify.com/embed/playlist/7LI3zw8HLkjKo5YpvA26KG?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl"
      ></iframe>
    </div>
  </div>
</div>

  );
};

export default MusicPlayer;
