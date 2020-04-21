import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, route }) => {
  if (isSignedIn && route === 'home') {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signout')}
          className="ma3 f3 link dim white pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else if (isSignedIn === false && route === 'signin') {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('register')}
          className="ma3 f3 link dim white pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signin')}
          className="ma3 f3 link dim white pa3 pointer"
        >
          Sign In
        </p>
      </nav>
    );
  }
};

export default Navigation;
