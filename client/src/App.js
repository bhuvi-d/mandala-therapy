import React from 'react';
import './index.css';
import Gallery from './components/Gallery';
import MusicPlayer from './components/MusicPlayer';
import ThemeToggle from './components/ThemeToggle';
import BreatheCircle from './components/BreatheCircle';
import ZenQuote from './components/ZenQuote'; 
import MandalaOfTheDay from './components/MandalaofTheDay';
import AffirmationJournal from './components/AffirmationJournal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white dark:from-gray-900 dark:to-black transition-colors duration-500">
      <h1 className="text-4xl font-bold text-center py-6 text-pink-700 dark:text-pink-200">
        Mandala Therapy by Bhuvi 🩷
      </h1>
    
        <ZenQuote />
          <ThemeToggle />
       <div className="w-[90%] md:w-[70%] mx-auto mt-6 animate-fade-in transform transition-transform duration-300 hover:scale-[1.02]">

  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">

    

    <p>
      <strong>Hi there 😊</strong>,<br />
      Welcome to <span className="font-bold text-pink-600">Mandala Therapy</span>. Creating or colouring mandalas is a proven way to reduce stress. 
      I am <span className="font-bold text-pink-500">Bhuvi</span>, and I love drawing mandalas ! I believe it is a unique form of self-expression.
    </p>

    <p className="mt-4">
      <strong>You can look at some of my mandalas in the gallery below.</strong><br />
      You can also colour the Mandala of the Day. 
      Clicking on any mandala in the gallery will play a soothing tune in the background — 
      you can then try replicating my design or use it as inspo :)
    </p>

    <p className="mt-4">
      <strong>There is also an embedded</strong> <span className="font-bold text-green-600">Spotify playlist</span> <strong>below to get the music going. </strong><br />
      Stay happy and add affirmations for yourself below — they’re stored locally in your browser and stay even after refresh!
    </p>

    <p className="mt-4 italic text-sm text-gray-500 dark:text-gray-400">
      <span className="font-medium">Login daily, I’ll be adding more mandalas frequently too ✨</span>
    </p>
  </div>
</div>



        <BreatheCircle />
            
        <MandalaOfTheDay />
           <Gallery />
           <AffirmationJournal />
       <MusicPlayer />
             <Footer />
     
     
    </div>
  );
}

export default App;
