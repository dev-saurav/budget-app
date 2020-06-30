import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import TransactionItem from './TransactionItem'
function TransactionList({ type }) {
    const { state, dispatch } = useContext(AppContext);
    console.log(state)
    const buildList = () => {
        if (type === "income") {
            return state.incomeTrans.map(income => {
                return <TransactionItem key={income.id} item={income} type={type} dispatch={dispatch} />
            })
        } else {
            return state.expenseTrans.map(expense => {
                return <TransactionItem key={expense.id} item={expense} type={type} dispatch={dispatch} />
            })
        }
    }
    return (
        <div className="transactionHistory">
            <div className="transaction-history-header">Transaction History</div>
            <div className="transaction-list">
                {buildList()}
            </div>
        </div>
    )
}

export default TransactionList
