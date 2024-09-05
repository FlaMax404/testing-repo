import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>click me!</button>
      </div>
    </div>
  );
};

export default App;
