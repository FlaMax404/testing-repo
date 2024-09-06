import React, { useState } from 'react';

import hmzImage from './images/hmz.png';
import anasImage from './images/anas.jpg';
import khomImage from './images/khom.png';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className='container mx-auto flex items-center justify-between my-6'>
        <button
          onClick={handleDecrement}
          className='px-3 py-1.5 bg-red-400 w-[64px] rounded-full text-2xl font-semibold  hover:bg-red-300 transition duration-300'
        >
          -
        </button>
        <h1 className='text-2xl font-semibold'>{count}</h1>
        <button
          onClick={handleIncrement}
          className='px-3 py-1.5 bg-blue-400 w-[64px] rounded-full text-2xl font-semibold  hover:bg-blue-300 transition duration-300'
        >
          +
        </button>
      </div>

      <div className='flex items-center justify-between h-[128px] px-12 my-6'>
        <img src={hmzImage} alt='hmz' className='h-full' />
        <h1 className='text-3xl font-bold'>+</h1>
        <img src={anasImage} alt='anus' className='h-full' />
        <h1 className='text-3xl font-bold'>=</h1>
        <img src={khomImage} alt='anus' className='h-full' />
      </div>
    </div>
  );
};

export default App;
