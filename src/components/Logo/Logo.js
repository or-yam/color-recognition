import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br3-white shadow-3"
        options={{
          reverse: false,
          max: 25,
          perspective: 150,
          scale: 1.05,
          speed: 10,
          transition: false,
          axis: null,
          reset: true,
        }}
        style={{ height: 120, width: 120 }}
      >
        <div className="Tilt-inner pa4">
          <img alt="logo" src={logo} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
