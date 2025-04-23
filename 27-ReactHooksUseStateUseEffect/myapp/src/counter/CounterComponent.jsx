import React, { useState } from 'react';
import './CounterComponent.css';

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const incrementCount = () => setCount(prev => prev + 1);
  const decrementCount = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setInputValue(value < 0 ? 0 : value);
  };
  const increaseInput = () => {
    setInputValue(prev => prev + count);
  };
  const decreaseInput = () => {
    setInputValue(prev => {
      const newValue = prev - count;
      return newValue < 0 ? 0 : newValue;
    });
  };
  return (
    <div className="counter-container">
      <div className="counter-section">
        <p className="counter-value">{count}</p>
        <div className="button-group">
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
        </div>
      </div>

      <div className="input-section">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          min="0"
        />
        <div className="button-group">
          <button onClick={increaseInput}>+</button>
          <button onClick={decreaseInput}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;

