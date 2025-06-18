import React, { useEffect, useState } from 'react';

const ZenQuote = () => {
  const [quote, setQuote] = useState('');

 useEffect(() => {
  fetch('/api/quote')
    .then((res) => res.json())
    .then((data) => {
      const quoteObj = data[0];
      setQuote(`${quoteObj.q} — ${quoteObj.a}`);
    })
    .catch(() => setQuote("Peace begins with a smile — Mother Teresa")); 
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
