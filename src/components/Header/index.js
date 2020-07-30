import React from 'react';
import logo from '../../public/assets/img/logo.png';

import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div>
        <div className="header-title">
          InspiQuotes
          <img src={logo} alt="inspiquote logo" />
        </div>
        <div className="header-subtitle">
          · Free your mind ·
        </div>
      </div>
    </div>
  );
};

export default Header;
