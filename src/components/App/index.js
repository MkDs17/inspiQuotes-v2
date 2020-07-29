import React from 'react';

import './app.scss';

import Background from '../Background';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

const App = () => {
  return (
    <div id="app">
      <Background />
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default App;
