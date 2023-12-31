import React, { useState } from 'react';

const Container = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </>
  );
};

export default Container;