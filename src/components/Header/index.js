import React from 'react';
import logo from '../../public/assets/img/logo.png';

import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div>
        <div className="header-title">
          <h1>
            InspiQuotes
            <img src={logo} alt="inspiquote logo" />
          </h1>
        </div>
        <div className="header-subtitle">
          <h2> · Free your mind ·</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
