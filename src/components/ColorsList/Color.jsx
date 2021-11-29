import React from 'react';

const Color = ({ hex, name, amount, demo }) => (
  <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5 ">
    <div className=" w3 h3 center br3 shadow-4" style={{ backgroundColor: demo }}></div>
    <div>
      <h2>{name}</h2>
      <h2>{hex}</h2>
      <h2>{amount}</h2>
    </div>
  </div>
);

export default Color;
