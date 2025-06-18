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
        <BreatheCircle />
            <ThemeToggle />
        <MandalaOfTheDay />
           <Gallery />
           <AffirmationJournal />
       <MusicPlayer />
             <Footer />
     
     
    </div>
  );
}

export default App;
