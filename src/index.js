import React from 'react';
import { render } from 'react-dom';

import 'src/styles/index.scss';

// External Lib
import 'emoji-mart/css/emoji-mart.css';
import 'react-slideshow-image/dist/styles.css';

import App from 'src/components/App';

const rootComponent = (
  <App />
);

const target = document.getElementById('root');

render(rootComponent, target);
