import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>Date</div>
            <div>
                <h2 className='expense_item__description'>Car Insurance</h2>
                <div className='expense_item__price'>Rs. 250</div>
            </div>
        </div>
    )
}

export default ExpenseItem;