import React, { useCallback, useEffect, useState } from "react";

export const useCounter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [test, setTest] = useState();

  useEffect(() => {
    fetch("/api/client/features")
      .then((response) => response.json())
      .then((response) => {
        setTest(response);
      })
      .catch(() => setTest({}));
  }, []);

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
    test,
  };
};
