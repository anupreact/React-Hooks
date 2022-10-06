import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  error: "",
  data: {},
};

const DataFetching2 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          error: "",
          data: action.payload,
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          error: "Something went wrong",
          data: {},
        };

      default:
        return state;
    }
  };

  const url = `https://jsonplaceholder.typicode.com/posts/2`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div >
      <h1>
        {state.loading ? "loading " : state.data.title}
        {state.error ? state.error : null}
      </h1>
    </div>
  );
};

export default DataFetching2;
