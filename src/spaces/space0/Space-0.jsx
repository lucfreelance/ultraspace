import React, { useState } from 'react';

const Space0 = () => {
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
        return num2 !== 0 ? (num1 / num2).toString() : 'Error'; // Handle division by zero
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

  const calculatorStyle = {
    width: '300px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  };

  const displayStyle = {
    backgroundColor: '#f2f2f2',
    fontSize: '2rem',
    padding: '10px',
    textAlign: 'right',
  };

  const buttonStyle = {
    backgroundColor: '#e0e0e0',
    fontSize: '1.5rem',
    width: '75px',
    height: '75px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  };

  const rowStyle = {
    display: 'flex',
  };

  return (
    <div style={calculatorStyle}>
      <h1 style={{ fontSize: '24px', textAlign: 'center', margin: '16px 0' }}>
        Ultra Calculator
      </h1>
      <div style={displayStyle}>{display}</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={rowStyle}>
          <button style={buttonStyle} onClick={() => handleNumberClick('7')}>
            7
          </button>
          <button style={buttonStyle} onClick={() => handleNumberClick('8')}>
            8
          </button>
          <button style={buttonStyle} onClick={() => handleNumberClick('9')}>
            9
          </button>
          <button style={buttonStyle} onClick={() => handleOperatorClick('+')}>
            +
          </button>
        </div>
        <div style={rowStyle}>
          <button style={buttonStyle} onClick={() => handleNumberClick('4')}>
            4
          </button>
          <button style={buttonStyle} onClick={() => handleNumberClick('5')}>
            5
          </button>
          <button style={buttonStyle} onClick={() => handleNumberClick('6')}>
            6
          </button>
          <button style={buttonStyle} onClick={() => handleOperatorClick('-')}>
            -
          </button>
        </div>
        <div style={rowStyle}>
          <button style={buttonStyle} onClick={() => handleNumberClick('1')}>
            1
          </button>
          <button style={buttonStyle} onClick={() => handleNumberClick('2')}>
            2
          </button>
          <button style={buttonStyle} onClick={() => handleNumberClick('3')}>
            3
          </button>
          <button style={buttonStyle} onClick={() => handleOperatorClick('*')}>
            *
          </button>
        </div>
        <div style={rowStyle}>
          <button style={buttonStyle} onClick={() => handleNumberClick('0')}>
            0
          </button>
          <button style={buttonStyle} onClick={clearCalculator}>
            C
          </button>
          <button style={buttonStyle} onClick={handleEqualsClick}>
            =
          </button>
          <button style={buttonStyle} onClick={() => handleOperatorClick('/')}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Space0;
