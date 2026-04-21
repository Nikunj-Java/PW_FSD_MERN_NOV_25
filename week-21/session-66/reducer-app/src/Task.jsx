import React, { useRef } from "react";

const Task = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    if (inputRef.current.value === "") {
      alert("Name is required!");
      inputRef.current.focus(); // focus again
    } else {
      alert("Submitted: " + inputRef.current.value);
    }
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter Name" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Task;