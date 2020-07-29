import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import './app.scss';

import Background from '../Background';
import Quote from '../Quote';

import quotes from '../../data/quotes';

function App() {
  const [quoteToShow, setQuoteToShow] = useState({});

  useEffect(() => {
    setQuoteToShow(quotes[0]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = _.random(0, (quotes.length - 1));
      setQuoteToShow(quotes[randomNumber]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  console.log('quotes.length', quotes.length);

  return (
    <div id="app">
      <Background />
      <Quote quote={quoteToShow} />
    </div>
  );
}

export default App;
