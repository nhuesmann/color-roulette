import { FC } from 'react';
import { motion } from 'framer-motion';
import { hexOptions, HEX_OPTION_COUNT } from './hex';

const CONTAINER_HEIGHT = 100;
const CHARACTER_HEIGHT = 40;
const SPACING_HEIGHT = 30;
const FULL_ITEM_HEIGHT = CHARACTER_HEIGHT + SPACING_HEIGHT;
const MIDPOINT = CONTAINER_HEIGHT / 2 - CHARACTER_HEIGHT / 2;

const BASE_DURATION = 3;
const BASE_ARRAY_REPEATS = 4;
const ITEMS_PER_SECOND =
  (HEX_OPTION_COUNT * BASE_ARRAY_REPEATS) / BASE_DURATION;
const END_DELAY_MULTIPLIER = 0.66;

const START = -(
  FULL_ITEM_HEIGHT * BASE_ARRAY_REPEATS * HEX_OPTION_COUNT -
  MIDPOINT -
  FULL_ITEM_HEIGHT
);
const END = MIDPOINT;

interface Props {
  slot: number;
}

export const Slot: FC<Props> = ({ slot }) => {
  const baseDelay = 0.25;
  const startDelay = Math.pow(baseDelay, 1 / slot);
  const endDelay = END_DELAY_MULTIPLIER * slot;

  const duration = BASE_DURATION + endDelay - startDelay;

  const itemCount = Math.floor(duration * ITEMS_PER_SECOND);
  const repeatedOptions = new Array(itemCount)
    .fill('0')
    .map((_, index) => hexOptions[index % HEX_OPTION_COUNT]);

  return (
    <motion.div
      className="relative rounded-md flex justify-center bg-slate-600 overflow-hidden"
      style={{
        height: CONTAINER_HEIGHT,
        width: CONTAINER_HEIGHT,
      }}
    >
      <motion.div
        className="space-y-[30px] absolute"
        initial={{ y: START }}
        animate={{ y: END }}
        transition={{
          duration: duration,
          delay: startDelay,
          ease: 'easeIn',
        }}
      >
        {repeatedOptions.map((hexValue, index) => (
          <div
            key={`${index}${hexValue}`}
            className="flex justify-center items-baseline"
            style={{ height: CHARACTER_HEIGHT }}
          >
            <p className="text-5xl text-white text-center align-middle">
              {hexValue}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

/*





*/
