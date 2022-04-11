import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addBtnClickHandler = () => {
    setIsClicked(true);
  };

  const cancelHandler = () => {
    setIsClicked(false);
  };

  return (
    <div className="new-expense">
      {!isClicked && (
        <button onClick={addBtnClickHandler}>Add New Expense</button>
      )}

      {isClicked && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
