import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">{`${name}, You checked the colors for:`}</div>
      <div className="white f1">{`${entries} Photos`}</div>
    </div>
  );
};

export default Rank;
