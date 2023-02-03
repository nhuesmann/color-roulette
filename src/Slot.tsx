import { FC, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { getAnimationValues } from './utils';
import { CHARACTER_HEIGHT, CONTAINER_HEIGHT, END, START } from './constants';
import type { SlotProps } from './types';

export const Slot: FC<SlotProps> = ({ slot, hexSymbol, isSpinning }) => {
  const { duration, startDelay, shiftedArray } = getAnimationValues({
    slot,
    hexSymbol,
  });

  const controls = useAnimationControls();

  useEffect(() => {
    if (isSpinning) {
      console.log('yo');
      controls.start({ y: END });
    }
  }, [isSpinning]);

  return (
    <div
      className="relative rounded-md flex justify-center bg-slate-600 overflow-hidden"
      style={{
        height: CONTAINER_HEIGHT,
        width: CONTAINER_HEIGHT,
      }}
    >
      <motion.div
        className="space-y-[30px]"
        // style={{ y: animatedY }}
        initial={{ y: START }}
        animate={controls}
        transition={{
          duration,
          delay: startDelay,
          ease: 'easeIn',
        }}
        onAnimationComplete={() => {
          console.log('onAnimationComplete');
          // TODO: add this symbol to the hex code, should change bg
        }}
      >
        {shiftedArray.map((hexValue, index) => (
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
    </div>
  );
};

/*





*/
