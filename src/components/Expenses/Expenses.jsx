import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";

const Expenses = (data) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={data.data[0].title}
        amount={data.data[0].amount}
        date={data.data[0].date}
      />
      <ExpenseItem
        title={data.data[1].title}
        amount={data.data[1].amount}
        date={data.data[1].date}
      />
      <ExpenseItem
        title={data.data[2].title}
        amount={data.data[2].amount}
        date={data.data[2].date}
      />
      <ExpenseItem
        title={data.data[3].title}
        amount={data.data[3].amount}
        date={data.data[3].date}
      />
    </Card>
  );
};

export default Expenses;
