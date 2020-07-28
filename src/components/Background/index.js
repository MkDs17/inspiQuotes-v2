import React from 'react';
import { Fade } from 'react-slideshow-image';

import './background.scss';

import pictures from '../../data/pictures';

const Background = () => {
  const fadeProperties = {
    arrows: false,
    duration: 2000,
    transitionDuration: 1500,
    infinite: true,
    indicators: false,
  };

  return (
    <div id="background">
      <div className="background">
        <Fade {...fadeProperties}>
          {pictures.map((picture) => (
            <div key={picture.id} className="background-each-fade">
              <div className="background-each-fade-image">
                <div className="background-each-fade-image-options" style={{'backgroundImage': `linear-gradient( rgba(0, 0, 0, .5), rgba(0, 0, 0, .2) ), url(src/public/assets/img/${picture.src})`}} />
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Background;
