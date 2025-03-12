import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,reset ,incrementByAmount } from "../features/counter/CounterSlice";

const Counter = () => {
  let count = useSelector((state) => {
    return state.counter.value;
  });
  let dispatch = useDispatch();
  let handleIncrement = () => {
    dispatch(increment());
  };

  let handleDecrement = () => {
    dispatch(decrement());
  };

  let handleReset = () => {
    dispatch(reset());
  };

  let handleincrementByAmount = () => {
    dispatch(incrementByAmount(10));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={handleIncrement}>Increment</button>
      <h1>Count:{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
      <button onClick={handleincrementByAmount}>incrementByAmount</button>
    </div>
  );
};

export default Counter;
