import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { totalIncome, totalExpense } from '../utils/utilFunc';
function IncomeExpenses() {
  const { state } = useContext(AppContext);

  return (
    <div className="incomeExpenses">
      <div className="income">
        <div>Income</div>
        <br />
        <div>Rs + {totalIncome(state)}</div>
      </div>
      <div className="expenses">
        <div>Expenses</div>
        <br />
        <div>Rs - {totalExpense(state)}</div>
      </div>
    </div>
  )
}

export default IncomeExpenses
