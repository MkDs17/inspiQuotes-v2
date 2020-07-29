import React, { useState, useEffect } from 'react';
import { Fade } from 'react-slideshow-image';
import _ from 'lodash';

import './container.scss';

import Quote from '../Quote';

import quotes from '../../data/quotes';

const Container = () => {
  /*
  const [quoteToShow, setQuoteToShow] = useState(quotes);

  useEffect(() => {
    setQuoteToShow(quotes[0]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = _.random(0, (quotes.length - 1));
      setQuoteToShow(quotes[randomNumber]);
    }, 5000);
    return () => clearInterval(interval);
  }, []); */

  const fadeProperties = {
    arrows: false,
    duration: 5000,
    transitionDuration: 1500,
    infinite: true,
    indicators: false,
    pauseOnHover: false,
  };

  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        {quotes.map((quote) => (
          <div key={quote.id} className="each-fade">
            <Quote quote={quote} />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Container;
