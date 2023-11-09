import './ExpenseItem.css'

function ExpenseItem(props) {
    
    return (
        <div className='expense-item'>
            <div>{props.date.toLocaleString()}</div>
            <div>
                <h2 className='expense_item__description'>{props.title}</h2>
                <div className='expense_item__price'>Rs. {props.amount}</div>
                <h2 className='expense_item__location'>{props.location}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem;