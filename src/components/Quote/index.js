import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Icon, Label } from 'semantic-ui-react';


import './quote.scss';

function Quote({ quote }) {
  const [likes, setLikes] = useState(quote.likes);
  const [heartLiked, setHeartLiked] = useState(false);

  const likingQuote = () => {
    setHeartLiked(!heartLiked);

    if (heartLiked === false) {
      setLikes(likes + 1);
    }
    else {
      setLikes(likes - 1);
    }
  };

  const heartClassname = classNames(
    {
      'icon--liked': heartLiked,
    }
  );

  return (
    <div id="quote">
      <div key={quote.id} className="quote">
        <div className="quote-content">
          <blockquote>{quote.text}</blockquote>
        </div>
        <div className="quote-infos">
          <div className="quote-infos-author">- {quote.author} -</div>
          <div className="quote-infos-likes">
            <Button as="div" labelPosition="right">
              <Button onClick={likingQuote} icon>
                <Icon name="heart" className={heartClassname} />
                Likes
              </Button>
              <Label as="a" basic pointing="left">
                {likes.toLocaleString('fr-FR')}
              </Label>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Quote;
