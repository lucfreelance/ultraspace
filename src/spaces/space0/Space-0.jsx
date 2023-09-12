import React, { useState } from 'react';
import "./Space0.css"

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentInput, setCurrentInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    if (display === '0' || currentInput === '0') {
      setCurrentInput(number);
    } else {
      setCurrentInput(currentInput + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (currentInput !== '') {
      if (previousInput === '') {
        setPreviousInput(currentInput);
      } else {
        setPreviousInput(performCalculation());
      }
      setCurrentInput('');
      setOperator(op);
    }
  };

  const handleEqualsClick = () => {
    if (previousInput !== '' && currentInput !== '') {
      setPreviousInput(performCalculation());
      setCurrentInput('');
      setOperator(null);
    }
  };

  const performCalculation = () => {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        return num2 !== 0 ? (num1 / num2).toString() : 'Error';
      default:
        return currentInput;
    }
  };

  const clearCalculator = () => {
    setDisplay('0');
    setCurrentInput('');
    setPreviousInput('');
    setOperator(null);
  };

  return (
    <div className="calculator">
      <a
        href="/spaces/space0"
        className="url"
      >
        Calculator [but bad]
      </a>
      <h1 className="calculator-title">Ultra Calculator</h1>
      <div className="calculator-display">{display}</div>
      <div className="calculator-buttons">
        <div className="button-row">
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={clearCalculator}>C</button>
          <button onClick={handleEqualsClick}>=</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
