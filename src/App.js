import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { useState } from "react";

const App = () => {
  const expenseData = [
    {
      expenseDate: new Date(2023, 9, 28),
      expenseTitle: "food",
      expenseAmount: 25,
      expenseLocation: "Lucknow"
    },
    {
      expenseDate: new Date(2023, 9, 28),
      expenseTitle: "drink",
      expenseAmount: 50,
      expenseLocation: "Lucknow"
    },
    {
      expenseDate: new Date(2023, 9, 28),
      expenseTitle: "Car Insurance",
      expenseAmount: 250,
      expenseLocation: "Lucknow"
    }, {
      expenseDate: new Date(2023, 9, 28),
      expenseTitle: "petrol",
      expenseAmount: 100,
      expenseLocation: "Lucknow"
    }];

    const [expenses, addExpense] = useState(expenseData);

    function addExpenseHandler(expense) {
        const newExpenses = [...expenseData, {
          expenseDate: new Date(expense.date),
          expenseTitle: expense.title,
          expenseAmount: expense.amount,
        }];
        addExpense(newExpenses);
        console.log(expenses);
    }
    
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
      console.log(selectedYear);
    }

  return (
    <div>
      <h2>Lets Start!</h2>
      <ExpenseForm onAddExpense={addExpenseHandler}></ExpenseForm>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      {
        expenses.map((expense) => 
          <ExpenseItem date={
            expense.expenseDate
          } title={
            expense.expenseTitle
          } amount={
            expense.expenseAmount
          } location={
            expense.expenseLocation
          }></ExpenseItem>
        )
      }
    </div>
  )
}

export default App;
