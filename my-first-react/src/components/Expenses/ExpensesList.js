import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  console.log(props.items);
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
