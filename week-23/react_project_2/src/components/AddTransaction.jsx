import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function AddTransaction() {
  const { dispatch } = useContext(ExpenseContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    dispatch({ type: "ADD", payload: newTransaction });

    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount (+/-)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

export default AddTransaction;