import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function Balance() {
  const { state } = useContext(ExpenseContext);

  const amounts = state.map((t) => t.amount);

  const total = amounts.reduce((acc, item) => acc + item, 0);

  return <h2>Balance: ₹{total}</h2>;
}

export default Balance;