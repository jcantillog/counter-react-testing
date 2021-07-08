import React, { useState } from "react";
import { useCounter } from "../../hooks/Counter/useCounter";
import "./styles.css";

function Counter() {
  const { inputValue, counterValue, increment, decrement, changeInput } =
    useCounter();

  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h2
        className={`${counterValue >= 100 ? "green" : ""}${
          counterValue <= -100 ? "red" : ""
        }`}
        data-testid="counter"
      >
        {counterValue}
      </h2>
      <button data-testid="subtract-btn" onClick={() => decrement()}>
        -
      </button>
      <input
        className="text-center"
        data-testid="input"
        type="number"
        value={inputValue}
        onChange={(e) => changeInput(parseInt(e.target.value))}
      ></input>
      <button data-testid="add-btn" onClick={() => increment()}>
        +
      </button>
    </div>
  );
}

export default Counter;
