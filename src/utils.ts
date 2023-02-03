import {
  BASE_DURATION,
  END_DELAY_MULTIPLIER,
  ITEMS_PER_SECOND,
} from './constants';
import { hexSymbols, HEX_SYMBOL_COUNT } from './hex';
import type { SlotProps } from './types';

export function getAnimationValues({ slot, hexSymbol }: SlotProps) {
  const baseDelay = 0.25;
  const startDelay = Math.pow(baseDelay, 1 / slot);
  const endDelay = END_DELAY_MULTIPLIER * slot;
  const duration = BASE_DURATION + endDelay - startDelay;
  const itemCount = Math.floor(duration * ITEMS_PER_SECOND);
  const repeatedOptions = new Array(itemCount)
    .fill('0')
    .map((_, index) => hexSymbols[index % HEX_SYMBOL_COUNT]);
  const hexSymbolIndex = hexSymbols.indexOf(hexSymbol)!;
  const optionsLength = repeatedOptions.length;
  const numToMove = hexSymbolIndex % optionsLength;
  const startChunk = repeatedOptions.slice(0, numToMove);
  const endChunk = repeatedOptions.slice(numToMove, optionsLength);
  const shiftedArray = [...endChunk, ...startChunk];

  return {
    duration,
    startDelay,
    shiftedArray,
  };
}
