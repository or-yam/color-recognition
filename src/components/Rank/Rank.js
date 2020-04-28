import React from 'react';

const capitalFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const Rank = ({ name, entries }) => {
  if (entries === '0') {
    return (
      <div>
        <div className="white f3">
          Welcome
          <span className="white f2">{` ${capitalFirst(name)}`}</span>
          {` , You Are Ready To Start`}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="white f3">
          <span className="white f2">{`${capitalFirst(name)}`}</span>
          {` , You identified colors for:`}
        </div>
        <div className="white f2">{`${entries} Images !`}</div>
      </div>
    );
  }
};

export default Rank;
