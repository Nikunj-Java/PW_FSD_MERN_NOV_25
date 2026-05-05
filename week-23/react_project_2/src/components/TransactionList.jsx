import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function TransactionList() {
  const { state, dispatch } = useContext(ExpenseContext);

  return (
    <ul>
      {state.map((t) => (
        <li key={t.id}>
          {t.text} - ₹{t.amount}

          <button onClick={() => dispatch({ type: "DELETE", payload: t.id })}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;