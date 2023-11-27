import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { useState } from "react";

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

const App = () => {

    const [expenses, addExpense] = useState(expenseData);

    async function addExpenseHandler(expense) {
      console.log("From Add", expense);
        const newExpenses = {
          expenseDate: new Date(expense.date),
          expenseTitle: expense.title,
          expenseAmount: Number(expense.amount),
          expenseLocation: "Patna"
        };
        addExpense((prevState) => {
          console.log(prevState);
          return [newExpenses, ...prevState];
        })
        
    }
    
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
      console.log(selectedYear);
    }
  
  const filteredExpenses = expenses.filter((expense) => {
    return expense.expenseDate.getFullYear().toString() === filteredYear;
  })  

  return (
    <div>
      <h2>Lets Start!</h2>
      <ExpenseForm onAddExpense={addExpenseHandler}></ExpenseForm>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      {
        filteredExpenses.map((expense, i) => {
          console.log(expenses)
          return (<ExpenseItem key={
            i
          } date={
            expense.expenseDate
          } title={
            expense.expenseTitle
          } amount={
            expense.expenseAmount
          } location={
            expense.expenseLocation
          }></ExpenseItem>)
        }
        )}
    </div>
  )
}

export default App;
