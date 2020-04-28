import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, route }) => {
  if (isSignedIn && route === 'home') {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signout')}
          className="b ph3 pv2 input-reset ba b--black bg-orange grow pointer f5 dib br4 near-white f1"
        >
          Sign Out
        </p>
      </nav>
    );
  } else if (isSignedIn === false && route === 'signin') {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p className="f2 fw6 ph0 mh0 white">Color Identify App</p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signin')}
          className="b ph3 pv2 input-reset ba b--black bg-blue grow pointer f5 dib br4 near-white f1"
        >
          Back To Sign In
        </p>
      </nav>
    );
  }
};

export default Navigation;
