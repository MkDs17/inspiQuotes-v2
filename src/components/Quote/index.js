import React from 'react';

import './quote.scss';

import quotes from '../../data/quotes';

function Quote() {
  return (
    <div id="quote">
      <div className="quote">
        {quotes.map((quote) => (
          <>
            <div className="quote-content">
              <blockquote>{quote.text}</blockquote>
            </div>
            <div className="quote-infos">
              {quote.text}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Quote;
