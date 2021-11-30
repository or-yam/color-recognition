export const calHexByColor = (color: string) => `Hex- ${color.toUpperCase()}`;

export const calNameByColor = (color: string) => `${color.match(/[A-Z][a-z]+/g)?.join(' ')}`;

export const calAmountByColor = (color: any) => `Density- ${(color * 100).toFixed(2)}%`;
