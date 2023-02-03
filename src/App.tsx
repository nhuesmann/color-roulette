import { useState } from 'react';
import { getRandomHexArray } from './hex';
import { Slot } from './Slot';

// const testHexArray = ['D', 'B', '7', '0', '9', '3'];
const testHexArray = ['D'];

export const App = () => {
  const [hexArray, setHexArray] = useState(testHexArray);
  const [isSpinning, setIsSpinning] = useState(false);

  function randomize() {
    // setHexArray(getRandomHexArray());
    setIsSpinning(true);
  }

  return (
    <div className="h-screen w-screen bg-slate-800 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-6">
        {hexArray.map((hexSymbol, index) => (
          <Slot
            key={`${index}${hexSymbol}`}
            slot={index}
            hexSymbol={hexSymbol}
            isSpinning={isSpinning}
          />
        ))}
      </div>
      <button className="mt-10 bg-gray-600 p-3 rounded-md" onClick={randomize}>
        Randomize
      </button>
    </div>
  );
};
