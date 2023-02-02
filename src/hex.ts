export const hexOptions = [
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

export const HEX_OPTION_COUNT = hexOptions.length;

function getRandomHexValue() {
  const maxIndex = HEX_OPTION_COUNT - 1;
  const minIndex = 0;
  const randomIndex = Math.floor(
    Math.random() * (maxIndex - minIndex + 1) + minIndex
  );
  return hexOptions[randomIndex];
}

export function getRandomHexArray() {
  return new Array(6).fill('0').map(getRandomHexValue);
}
