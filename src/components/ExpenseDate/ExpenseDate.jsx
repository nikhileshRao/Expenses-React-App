import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (date) => {
  const dateValue = date.date.split(",");
  return (
    <div className="expense-date ">
      <div className="expense-date__day">{dateValue[2]}</div>
      <div className="expense-date__month">{dateValue[1]}</div>
      <div className="expense-date__year ">{dateValue[0]} </div>
    </div>
  );
};

export default ExpenseDate;
