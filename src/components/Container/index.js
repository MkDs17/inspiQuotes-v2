import React, {useState, useEffect} from 'react';
import { Fade } from 'react-slideshow-image';

import './container.scss';

import Quote from '../Quote';

import quotes from '../../data/quotes';

const Container = () => {
  const [quotesToShow, setQuotesToShow] = useState([]);

  useEffect(() => {
    if (quotes !== undefined) {
      const randomlyQuotes = quotes.sort((quote) => Math.random(quote.id) - 0.5);
      setQuotesToShow(randomlyQuotes);
    }
  }, []);

  const fadeProperties = {
    arrows: false,
    duration: 10000,
    transitionDuration: 1250,
    infinite: true,
    indicators: false,
    pauseOnHover: false,
  };

  return (
    <div className="slide-full-width-container">
      <div className="container">
        <Fade {...fadeProperties}>
          {quotesToShow.map((quote) => (
            <div key={quote.id} className="each-fade">
              <Quote quote={quote} />
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Container;
