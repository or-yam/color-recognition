import React from 'react';
import Color from './Color';

const ColorsList = ({ colors }) => {
  return (
    <div>
      {colors.map((color, i) => {
        return (
          <Color
            key={i}
            demo={colors[i][0]}
            hex={`Hex- ${colors[i][0].toUpperCase()}`}
            name={`Color- ${colors[i][1].match(/[A-Z][a-z]+/g).join(' ')}`}
            amount={`Amount- ${(colors[i][2] * 100).toFixed([2])}%`}
          />
        );
      })}
    </div>
  );
};

export default ColorsList;
