import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./components/ComponentC";
import { createContext, useReducer } from "react";
// import Counter1 from "./components/Counter1";
// import Counter2 from "./components/Counter2";
// import Counter3 from "./components/Counter3";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import DataFetching1 from "./components/DataFetching1";
import DataFetching2 from "./components/DataFetching2";
import ParentComponent from "./components/useCallbackHook/ParentComponent";
import UseMemoHook from "./components/useMemoHook/UseMemoHook";
import FocusInput from "./components/useRefHook/FocusInput";
import TimerHook from "./components/useRefHook/TimerHook";
import DocTitle1 from "./components/CustomHooks/DocTitle1";
import DocTitle2 from "./components/CustomHooks/DocTitle2";
import HookCounter1 from "./components/HookCounter1";
import HookCounter2 from "./components/HookCounter2";
import UserForm from "./components/UserForm";




export const CountContext = createContext();

export const userContext = createContext();
export const channelContext = createContext();

const initialState = 0;

function App() {

  const reducer = (state, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      case "Reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    {/* <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <h2>Count - {count}</h2>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider> */}

    <div className="App">
      {/* <DataFetching1/> data fetched using useState */}
      {/* <DataFetching2/> data fetched using useReducer */}


      <ParentComponent/>
      <br />

     {/* <UseMemoHook/> */}

     {/* <FocusInput/>


     <TimerHook/>

     <DocTitle1/><br />
     <DocTitle2/> */}


     <br /><br />

     <HookCounter1/><br />
     <HookCounter2/> 
     <br />

     <UserForm/>
    </div>
    </>

  );
}

export default App;
