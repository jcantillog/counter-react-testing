import React from "react";
import Counter from "..";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter></Counter>);
  getByTestId = component.getByTestId;
});

afterEach(() => {
  cleanup();
});

test("header renders with correct text", () => {
  const headerElement = getByTestId("header");

  expect(headerElement.textContent).toBe("My Counter");
});

test("counter initially start with text of 0", () => {
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const inputElement = getByTestId("input");

  expect(inputElement.value).toBe("1");
});

test("add button renders with +", () => {
  const addButton = getByTestId("add-btn");

  expect(addButton.textContent).toBe("+");
});

test("subtract button renders with +", () => {
  const subtractButton = getByTestId("subtract-btn");

  expect(subtractButton.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  const inputElement = getByTestId("input");

  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  expect(inputElement.value).toBe("5");
});

test("click on plus button adds 1 to counter", () => {
  const addButton = getByTestId("add-btn");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("1");
});

test("click on subtract button subtracts 1 to counter", () => {
  const subtractButton = getByTestId("subtract-btn");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("-1");
});

test("change input value then click on add button to work correctly", () => {
  const addButton = getByTestId("add-btn");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("5");
});

test("change input value then click on subtract button to work correctly", () => {
  const subtractButton = getByTestId("subtract-btn");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("-5");
});

test("adding and then subtracting leads to the correct counter number", () => {
  const subtractButton = getByTestId("subtract-btn");
  const addButton = getByTestId("add-btn");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "10",
    },
  });

  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("20");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("30");
});

test("counter contains correct className", () => {
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");
  const subtractButton = getByTestId("subtract-btn");
  const addButton = getByTestId("add-btn");

  expect(counterElement.className).toBe("");

  fireEvent.change(inputElement, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addButton);
  expect(counterElement.className).toBe("");
  fireEvent.click(addButton);
  expect(counterElement.className).toBe("green");
  fireEvent.click(addButton);
  expect(counterElement.className).toBe("green");

  fireEvent.click(subtractButton);
  fireEvent.click(subtractButton);
  expect(counterElement.className).toBe("");
  fireEvent.click(subtractButton);
  fireEvent.click(subtractButton);
  fireEvent.click(subtractButton);
  expect(counterElement.className).toBe("red");
});
