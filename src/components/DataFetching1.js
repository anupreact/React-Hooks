import React, { useEffect, useState } from "react";
import axios from "axios";

const url = `https://jsonplaceholder.typicode.com/posts/2`;

const DataFetching1 = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setData({});
        setError(`Something went wrong`);
      });
  }, []);

  return (
    <div>
      <h1>
        {loading ? "loading " : data.title}
        {error ? error : null}
      </h1>
    </div>
  );
};

export default DataFetching1;
