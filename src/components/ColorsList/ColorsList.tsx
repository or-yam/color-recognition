import Color from './Color';
import { ColorType } from '../../interfaces/Colors';
import { calHexByColor, calNameByColor, calAmountByColor } from '../../Utilities/Utilities';

const ColorsList = function ({ colors }: { colors: string[] }) {
  return (
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
};

export default ColorsList;
