import React from 'react';

import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div>
        <div className="header-title">
          InspiQuotes
          <img src="src/public/assets/img/logov2.png" alt="inspiquote logo" />
        </div>
        <div className="header-subtitle">
          · Free your mind ·
        </div>
      </div>
    </div>
  );
};

export default Header;
