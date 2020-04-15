import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2-white shadow-2"
        options={{
          reverse: true, // reverse the tilt direction
          max: 25, // max tilt rotation (degrees)
          perspective: 100, // Transform perspective, the lower the more extreme the tilt gets.
          scale: 1, // 2 = 200%, 1.5 = 150%, etc..
          speed: 10, // Speed of the enter/exit transition
          transition: true, // Set a transition on enter/exit.
          axis: null, // What axis should be disabled. Can be X or Y.
          reset: true, // If the tilt effect has to be reset on exit.
          easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit. }}
        }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa4">
          {' '}
          <img alt="logo" src={logo} />{' '}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
