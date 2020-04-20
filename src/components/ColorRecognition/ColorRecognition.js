import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="  absolute mt2 ">
        <img
          id="inputImage"
          width="500px"
          height="auto"
          alt=""
          src={imageUrl}
        />
      </div>
    </div>
  );
};
export default FaceRecognition;
