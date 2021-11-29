import React from 'react';
import Color from './Color';
import { calHexByColor, calNameByColor, calAmountByColor } from '../../Utilities/Utilities';

const ColorsList = ({ colors }) => (
  <div>
    {colors.map(([hex, name, amount], i) => (
      <Color
        key={i}
        demo={hex}
        hex={calHexByColor(hex)}
        name={calNameByColor(name)}
        amount={calAmountByColor(amount)}
      />
    ))}
  </div>
);

export default ColorsList;
