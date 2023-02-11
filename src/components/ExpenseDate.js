import "./ExpenseDate.css";

const ExpenseDate = (date) => {
  console.log(date);
  return (
    <div className="expense-date ">
      <div className="expense-date__day">18</div>
      <div className="expense-date__month">12</div>
      <div className="expense-date__year ">2020 </div>
    </div>
  );
};

export default ExpenseDate;
