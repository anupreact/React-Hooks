import React, {  } from "react";
import useCounter from "./CustomHooks/useCounter";



const HookCounter2 = () => {

   const [Increment , Decrement , Reset , count] = useCounter(10,10)

  return (
    <div>
       <h1>count 2 =  {count} </h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default HookCounter2;
