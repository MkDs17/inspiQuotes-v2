import React from 'react';
import { Fade } from 'react-slideshow-image';
import bg from '../../public/assets/img/bg.jpg';
import bg1 from '../../public/assets/img/bg1.jpg';
import bg2 from '../../public/assets/img/bg2.jpg';
import bg3 from '../../public/assets/img/bg3.jpg';
import bg4 from '../../public/assets/img/bg4.jpg';

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
              <div className="background-each-fade-image-options" style={{'backgroundImage': `linear-gradient( rgba(255, 255, 255, .5), rgba(255, 255, 255, .3) ), url(${picture.src})`}} />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Background;
