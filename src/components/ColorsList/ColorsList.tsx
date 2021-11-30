import Color from './Color';
import { calHexByColor, calNameByColor, calAmountByColor } from '../../Utilities/Utilities';

function ColorsList({ colors }: { colors: [string, string, number][] }) {
  return (
    <div>
      {colors.map(([hex, name, amount]) => (
        <Color
          key={`${amount}-${hex}`}
          demo={hex}
          hex={calHexByColor(hex)}
          name={calNameByColor(name)}
          amount={calAmountByColor(amount)}
        />
      ))}
    </div>
  );
}

export default ColorsList;
