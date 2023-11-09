import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
  const expenses = [
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
  return (
    <div>
      <h2>Lets Start!</h2>
      {
        expenses.map((expense, i) => 
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
