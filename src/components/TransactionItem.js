import React from 'react'

const TransactionItem = ({ item, type, dispatch }) => {
    return (
        <div class="item">
            <span className={`trasaction-list-item ${type === "income" ? "incomeColor" : "expenseColor"}`}>
                <span className="transaction-item">{item.title}</span>
                <span className="transaction-item">{item.amount}</span>
            </span>
            <i class="material-icons" onClick={() => dispatch({ type: "DELETE", payload: { txType: type, id: item.id } })}>delete</i>
        </div>
    )
}

export default TransactionItem;