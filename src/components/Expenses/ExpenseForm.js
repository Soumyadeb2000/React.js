import { useState } from "react";

const ExpenseForm = () => {
    const [enteredTitle , setEnteredTitle] = useState('Initial');
    const [enteredAmount , setEnteredAmount] = useState('Initial');
    const [enteredDate , setEnteredDate] = useState('Initial')
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
        const title = e.target.title.value;
        const amount = e.target.amount.value;
        const date = e.target.title.date;
        const obj = {title, amount, date};
        console.log(obj);
    }

    return (
        <div>
            <form onSubmit={display}>
                <input onChange={updateTitle} id="title" name="title" type="text" placeholder="Expense Title"></input>
                <input onChange={updateAmount} id="amount" name="amount" type="number" placeholder="Expense Amount"></input>
                <input onChange={updateDate} id="date" name="date" type="date" placeholder="Expense Date"></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm;