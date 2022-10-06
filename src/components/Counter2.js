import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const Counter2 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return {
          ...state,
          firstCounter: state.firstCounter + action.value,
        };
      case "Decrement":
        return {
          ...state,
          firstCounter: state.firstCounter - action.value,
        };
      case "Increment2":
        return {
          ...state,
          secondCounter: state.secondCounter + action.value,
        };
      case "Decrement2":
        return {
          ...state,
          secondCounter: state.secondCounter - action.value,
        };
      case "Reset":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1> {count.firstCounter} </h1>
      <h1> {count.secondCounter} </h1>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        Decrement 5
      </button>

      <div>
      <button onClick={() => dispatch({ type: "Increment2", value: 5 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "Decrement2", value: 5 })}>
        Decrement Counter 2
      </button>
      </div>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default Counter2;
