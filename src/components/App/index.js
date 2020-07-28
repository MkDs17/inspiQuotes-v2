import React, { useState, useEffect } from 'react';

import './app.scss';

import Background from '../Background';
import Quote from '../Quote';

import quotes from '../../data/quotes';

function App() {
  const [quoteToShow, setQuoteToShow] = useState({});

  useEffect(() => {
    setQuoteToShow(quotes[2]);
  });

  return (
    <div id="app">
      <Background />
      <Quote quote={quoteToShow} />
    </div>
  );
}

export default App;
