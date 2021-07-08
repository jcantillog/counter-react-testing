import React, { useState } from "react";

export const useCounter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const increment = () => {
    setCounterValue(counterValue + inputValue);
  };

  const decrement = () => {
    setCounterValue(counterValue - inputValue);
  };

  const changeInput = (value) => {
    setInputValue(value);
  };

  return {
    counterValue,
    inputValue,
    increment,
    decrement,
    changeInput,
  };
};
