import React, { useReducer } from "react";

const initialState = 0;

const Counter3 = () => {

  const reducer = (state, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      case "Reset":
        return initialState;
        default : 
        return state
    }
  };

  const [count , dispatch] = useReducer(reducer, initialState);
  const [count2 , dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
       <h1> {count} </h1>
      <button onClick={()=>dispatch("Increment")}>Increment</button>
      <button onClick={()=>dispatch("Decrement")}>Decrement</button>
      <button onClick={()=>dispatch("Reset")}>Reset</button>

      <div>
       <h1> {count2} </h1>
      <button onClick={()=>dispatch2("Increment")}>Increment</button>
      <button onClick={()=>dispatch2("Decrement")}>Decrement</button>
      <button onClick={()=>dispatch2("Reset")}>Reset</button>
    </div>
    </div>
  );
};

export default Counter3;
