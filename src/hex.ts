export const hexSymbols = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];
// TODO: delete below
export const hexSymbolsForScrollAnim = hexSymbols.slice().concat(hexSymbols[0]);

export const HEX_SYMBOL_COUNT = hexSymbols.length;
// TODO: delete below
export const HEX_SYMBOL_SCROLL_COUNT = hexSymbolsForScrollAnim.length;

function getRandomHexSymbol() {
  const maxIndex = HEX_SYMBOL_COUNT - 1;
  const minIndex = 0;
  const randomIndex = Math.floor(
    Math.random() * (maxIndex - minIndex + 1) + minIndex
  );
  return hexSymbols[randomIndex];
}

export function getRandomHexArray() {
  return new Array(6).fill('0').map(getRandomHexSymbol);
}
