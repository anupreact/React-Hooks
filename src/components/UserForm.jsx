import React, { useState } from "react";
import useInput from "./CustomHooks/useInput";

const UserForm = () => {
  const [fName, bindFName, resetFName] = useInput("");
  const [lName, bindLName, resetLName] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(lName);
    resetFName("");
    resetLName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" {...bindFName} />
        </div>
        <br />
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" {...bindLName} />
        </div>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
