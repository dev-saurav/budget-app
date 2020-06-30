import { setLocalStorage } from "../utils/utilFunc";

const deleteTx = (list, id) => {
    return list.filter(item => item.id !== id);
}

export const Reducer = (state, action) => {
    switch (action.type) {
        case "DELETE":
            if (action.payload.txType === "income") {
                const list = deleteTx(state.incomeTrans, action.payload.id)
                const finalState = { ...state, incomeTrans: list }
                setLocalStorage(finalState)
                return finalState
            } else if (action.payload.txType === "expense") {
                const list = deleteTx(state.expenseTrans, action.payload.id)
                const finalState = { ...state, expenseTrans: list }
                setLocalStorage(finalState)
                return finalState
            }
            break;
        case "ADD":
            if (action.payload.txType === "income") {
                const finalState = { ...state, incomeTrans: [action.payload.item, ...state.incomeTrans] }
                setLocalStorage(finalState)
                return finalState
            } else if (action.payload.txType === "expense") {
                const finalState = { ...state, expenseTrans: [action.payload.item, ...state.expenseTrans] }
                setLocalStorage(finalState)
                return finalState;
            }
            break;
        default:
            return state;
    }
}