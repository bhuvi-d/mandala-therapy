import React, { useState, useEffect } from 'react';

const AffirmationJournal = () => {
  const [affirmation, setAffirmation] = useState('');
  const [journal, setJournal] = useState(() => {
    const saved = localStorage.getItem('affirmations');
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddAffirmation = () => {
    if (!affirmation.trim()) return;

    const newEntry = {
      text: affirmation,
      date: new Date().toLocaleString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      id: Date.now(),
    };

    const updatedJournal = [newEntry, ...journal];
    setJournal(updatedJournal);
    setAffirmation('');
    localStorage.setItem('affirmations', JSON.stringify(updatedJournal));
  };

  const handleDelete = (id) => {
    const updated = journal.filter(entry => entry.id !== id);
    setJournal(updated);
    localStorage.setItem('affirmations', JSON.stringify(updated));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 my-12 text-center">
      <h2 className="text-4xl font-bold mb-2 text-pink-700 dark:text-white">Affirmation Journal</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 italic text-lg">
        Write something for yourself today 
      </p>

      <textarea
        className="w-full p-4 border-2 border-pink-300 dark:border-pink-500 rounded-lg text-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white resize-none mb-4"
        rows="4"
        placeholder="I am confident ...."
        value={affirmation}
        onChange={(e) => setAffirmation(e.target.value)}
      />

      <button
        onClick={handleAddAffirmation}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full transition"
      >
        Save Affirmation
      </button>

      <div className="mt-8 text-left">
        {journal.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Drop an affirmation !</p>
        ) : (
          <ul className="space-y-4">
            {journal.map((entry) => (
              <li key={entry.id} className="p-4 bg-pink-50 dark:bg-gray-900 border-l-4 border-pink-400 dark:border-pink-600 rounded-lg shadow">
                <p className="text-lg text-gray-800 dark:text-white mb-1">{entry.text}</p>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between items-center">
                  <span>{entry.date}</span>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AffirmationJournal;
