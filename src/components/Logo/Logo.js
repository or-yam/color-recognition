import React from 'react';
import './Logo.css';
import logo from './logo.png';
const Logo = () => {
  return (
    <div className="pa0"   style={{ display: 'flex', justifyContent: 'flex-start', height: "120px", width:"120px" }}>
      <div className="logo br3 shadow-4"  style={{ height: "120px", width:"120px" }}>
        <div className="pa4">
          <img alt="logo" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
