import React, { createContext, useReducer, useEffect } from "react";

export const ExpenseContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter((t) => t.id !== action.payload);

    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};