import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid';

function AddIncomeExpanses({ type }) {
    const { dispatch } = useContext(AppContext)
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (title && amount) {
            const item = {
                id: uuidv4(),
                title: title,
                amount: amount * 1
            }
            dispatch({ type: "ADD", payload: { txType: type, item: item } })
        }
        setTitle("")
        setAmount("")
    }
    return (
        <div className="incomeForm">
            <form onSubmit={handleOnSubmit}>
                <input type="text" className="input" value={title} placeholder={type === "income" ? "Add Income.." : "Add Expense.. "} onChange={(e) => setTitle(e.target.value)} />
                <input type="number" value={amount} className="input" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
                <button type="submit" className={`waves-effect waves-light btn-small btn ${type == "income" ? "incomeColor" : "expenseColor"}`}>Save</button>
            </form>
        </div>
    )
}

export default AddIncomeExpanses
