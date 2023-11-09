import '../Expenses/ExpenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate';
import ExpenseDetails from '../Expenses/ExpenseDetails';
const ExpenseItem = (props) => {
    
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
        </div>
    )
}

export default ExpenseItem;