import React from 'react';
import Color from './Color';
import {
  calHexByColor,
  calNameByColor,
  calAmountByColor,
} from '../Utilities/Utilities';

const ColorsList = ({ colors }) => {
  return (
    <div>
      {colors.map((color, i) => {
        return (
          <Color
            key={i}
            demo={colors[i][0]}
            hex={calHexByColor(colors[i][0])}
            name={calNameByColor(colors[i][1])}
            amount={calAmountByColor(colors[i][2])}
          />
        );
      })}
    </div>
  );
};

export default ColorsList;
