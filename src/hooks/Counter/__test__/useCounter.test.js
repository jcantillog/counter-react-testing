import React from "react";
import { useCounter } from "../useCounter";
import { renderHook, act } from "@testing-library/react-hooks";
import makeServer from "../../../server";

const setup = () => renderHook(() => useCounter());

describe("miragejs", () => {
  it("test the connection to the server", async () => {
    const server = makeServer();
    const { result, waitForNextUpdate } = setup();
    await waitForNextUpdate();
    expect(result.current.test).not.toBe(undefined);
    server.shutdown();
  });
});

describe("increment", () => {
  it("increments the counter value by 1 from the hook", () => {
    const { result } = setup();

    act(() => {
      result.current.increment();
    });

    expect(result.current.counterValue).toBe(1);
  });
});

describe("decrement", () => {
  it("decrements the counter value by 1 from the hook", () => {
    const { result } = setup();

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counterValue).toBe(-1);
  });
});
