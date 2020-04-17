import React from 'react';

const ColorOutput = ({ colors }) => {
  return (
    <div className="center ma3">
      <div className="center form pa4 br3 shadow-5">{colors}</div>
    </div>
  );
};

export default ColorOutput;
