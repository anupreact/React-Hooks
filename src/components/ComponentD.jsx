import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentD = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
        <h3>  ComponentD  :{countContext.countState} </h3> 
      <button onClick={() => countContext.countDispatch("Increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("Decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("Reset")}>Reset</button>
    </div>
  );
};

export default ComponentD;
