import React from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesData from "./content/expenses.json";

const App = () => {
  return (
    <div>
      <Expenses data={ExpensesData} />
    </div>
  );
};

export default App;
