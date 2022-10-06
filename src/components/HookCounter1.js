import React  from "react";
import useCounter from "./CustomHooks/useCounter";



const HookCounter1 = () => {
    const [Increment , Decrement , Reset , count] = useCounter(0 , 2)
    return (
    <div>
       <h1>count 1 = {count} </h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default HookCounter1;
