import React, { useState } from 'react';
import MainContainer from './ButtonsTable';
import Display from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [status, setStatus] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const target = e.target.dataset.name;
    const newState = calculate(status, target);
    setStatus((prevState) => ({ ...prevState, ...newState }));
  };

  const handleKey = (e) => {
    e.preventDefault();
  };

  return (
    <div className="calculator-container">
      <div className="hero-container">
        <Display input={status.total} next={status.next} operation={status.operation} />
        <MainContainer event={handleClick} keyDown={handleKey} />
      </div>
    </div>
  );
};

export default Calculator;
