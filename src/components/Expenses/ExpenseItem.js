import '../Expenses/ExpenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate';
import ExpenseDetails from '../Expenses/ExpenseDetails';

    

const ExpenseItem = (props) => {
    const deleteExpense = (e) => {
        e.preventDefault();
        const expenseDiv = e.target.parentElement;
        const parent = expenseDiv.parentElement;
        parent.removeChild(expenseDiv)
        
    }
    return (  
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
            <button onClick={deleteExpense}>Delete Expense</button>
        </div>
    )
}

export default ExpenseItem;