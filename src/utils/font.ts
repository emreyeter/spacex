export function font(size: FONT_SIZE, weight: FONT_WEIGHT) {
  return `
  font-size: ${size}px; 
  font-weight: ${weight};
  `;
}

export enum FONT_SIZE {
  SMALL = 12,
  MEDIUM = 14,
  LARGE = 16,
  XLARGE = 18,
  BIG = 20,
}

export enum FONT_WEIGHT {
  LIGHT = 300,
  REGULAR = 400,
  BOLD = 700,
}

