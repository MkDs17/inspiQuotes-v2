import React from 'react';
import { Fade } from 'react-slideshow-image';

import './background.scss';

import pictures from '../../data/pictures';

const Background = () => {
  const fadeProperties = {
    arrows: false,
    duration: 10000,
    transitionDuration: 1250,
    infinite: true,
    indicators: false,
  };

  return (
    <div className="background">
      <Fade {...fadeProperties}>
        {pictures.map((picture) => (
          <div key={picture.id} className="background-each-fade">
            <div className="background-each-fade-image">
              <div className="background-each-fade-image-options" style={{'backgroundImage': `linear-gradient( rgba(255, 255, 255, .5), rgba(255, 255, 255, .3) ), url(/public/assets/img/${picture.src})`}} />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Background;
