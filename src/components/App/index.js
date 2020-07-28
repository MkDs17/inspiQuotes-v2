import React from 'react';

import './app.scss';

import Background from '../Background';
import Quote from '../Quote';

function App() {
  const quote = {
    id: 1,
    text: 'Change your life, learn to code',
    author: 'Anonymous',
    likes: new Date().getFullYear(),
  };

  return (
    <div id="app">
      <Background />
      <Quote quote={quote} />
    </div>
  );
}

export default App;
