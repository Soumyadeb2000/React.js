import '../Expenses/ExpenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate';
import ExpenseDetails from '../Expenses/ExpenseDetails';
import { useState } from 'react';

    

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const deleteExpense = (e) => {
        e.preventDefault();
        const expenseDiv = e.target.parentElement;
        const parent = expenseDiv.parentElement;
        parent.removeChild(expenseDiv)
        
    }
    const changeTitle = (e) => {
        e.preventDefault();
        setTitle((prevState)=> {
            return "updated";
        });
        console.log(title);
    }
    return (  
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
            <button onClick={deleteExpense}>Delete Expense</button>
            <button onClick={changeTitle}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;