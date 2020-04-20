import React from 'react';

const ColorRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma mt2">
      <img id="inputImage" width="500px" height="auto" alt="" src={imageUrl} />
    </div>
  );
};
export default ColorRecognition;
