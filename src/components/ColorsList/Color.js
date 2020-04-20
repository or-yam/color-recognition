import React from 'react';

const Color = ({ hex, name, amount,demo }) => {
   
    return (
    <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
      <div className="colorDemo" style={{backgroundColor: demo} }>
        COLOR
      </div>
      <div>
        <h2>{name}</h2>
        <h2>{hex}</h2>
        <h2>{amount}</h2>
      </div>
    </div>
  );
};

export default Color;
