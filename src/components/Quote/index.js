import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Icon, Label } from 'semantic-ui-react';

import './quote.scss';

const Quote = ({ quote }) => {
  const [heartLiked, setHeartLiked] = useState(false);
  const [likes, setLikes] = useState();

  useEffect(() => {
    setLikes(quote.likes);
  }, [quote]);

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
    },
  );

  return (
    <div id="quote">
      <div className="quote">
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
                {likes}
              </Label>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    author: PropTypes.string,
    likes: PropTypes.number,
  }),
};
Quote.defaultProps = {
  quote: PropTypes.shape({
    id: 1,
    text: 'Change your life, learn to code',
    author: 'Anonymous',
    likes: 22,
  }),
};

export default Quote;
