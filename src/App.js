import Expenses from "./components/Expenses";
import ExpensesData from "./content/expenses.json";

const App = () => {
  return (
    <div>
      <Expenses data={ExpensesData} />
    </div>
  );
};

export default App;
