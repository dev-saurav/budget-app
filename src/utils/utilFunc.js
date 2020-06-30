export const totalIncome = (state) => {
    let total = 0;
    state.incomeTrans.forEach(income => {
        total += income.amount
    })
    return total;
}
export const totalExpense = (state) => {
    let total = 0;
    state.expenseTrans.forEach(expense => {
        total += expense.amount
    })
    return total;
}

export const setLocalStorage = (obj) => {
    localStorage.setItem("budgetApp", JSON.stringify(obj))
}

export const getLocalStroage = () => {
    return JSON.parse(localStorage.getItem("budgetApp"))
}