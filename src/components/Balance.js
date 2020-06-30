import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { totalIncome, totalExpense } from '../utils/utilFunc'
function Balance() {
    const { state } = useContext(AppContext)

    return (
        <div className="balance">
            <div>Your Balance</div>
            <br />
            <div>Rs {totalIncome(state) - totalExpense(state)}</div>
        </div>
    )
}

export default Balance
