
const ExpenseForm = () => {
    return (
        <div>
            <form>
                <input onChange={display} id="title" name="title" type="text" placeholder="Expense Title"></input>
                <input onChange={display} id="amount" name="amount" type="number" placeholder="Expense Amount"></input>
                <input onChange={display} id="date" name="date" type="date" placeholder="Expense Date"></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

function display(e) {
    console.log(e.target.value);
}

export default ExpenseForm;