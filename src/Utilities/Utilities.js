export const calHexByColor = color => `Hex- ${color.toUpperCase()}`;

export const calNameByColor = color => `${color.match(/[A-Z][a-z]+/g).join(' ')}`;

export const calAmountByColor = color => `Density- ${(color * 100).toFixed([2])}%`;
