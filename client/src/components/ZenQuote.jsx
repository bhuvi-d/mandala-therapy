import React, { useEffect, useState } from 'react';

const ZenQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('/api/today')

      .then(res => res.json())
      .then(data => {
        setQuote(data[0].q + " — " + data[0].a);
      })
      .catch(err => console.error("Error fetching quote:", err));
  }, []);

  return (
    <div className="text-center mt-6 text-lg font-medium text-pink-900 dark:text-white max-w-xl mx-auto px-4">
      {quote ? (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
          <p>  <em>{quote}</em></p>
        </div>
      ) : (
        <p>Fetching your ZenQuote </p>
      )}
    </div>
  );
};

export default ZenQuote;
