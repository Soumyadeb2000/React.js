import { useState } from "react";

const ExpenseForm = (props) => {
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');
    function updateTitle(e) {
        setEnteredTitle(e.target.value)
        console.log(enteredTitle);
    }
    function updateAmount(e) {
        setEnteredAmount(e.target.value)
        console.log(enteredAmount);
    }
    function updateDate(e) {
        setEnteredDate(e.target.value)
        console.log(enteredDate);
    }

    function display(e) {
        e.preventDefault();
        hide(e)
        const title = enteredTitle;
        const amount = enteredAmount;
        const date = new Date(enteredDate);
        const id = Math.random().toString();
        const obj = {id, title, amount, date};
        props.onAddExpense(obj);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    function hide(e) {
        e.preventDefault();
        document.getElementById('form').style.display = 'none';
    }

    function show(e) {
        e.preventDefault();
        document.getElementById('form').style.display = 'block';
    }

    return (
        <div>
            <button onClick={show}>Add New Expense</button>
            <form id="form" onSubmit={display} style={{display:'none'}}>
                <input onChange={updateTitle} value={enteredTitle} id="title" name="title" type="text" placeholder="Expense Title"></input>
                <input onChange={updateAmount} value={enteredAmount} id="amount" name="amount" type="number" placeholder="Expense Amount"></input>
                <input onChange={updateDate} value={enteredDate} id="date" name="date" type="date" placeholder="Expense Date"></input>
                <button onClick={hide}>Back</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm;