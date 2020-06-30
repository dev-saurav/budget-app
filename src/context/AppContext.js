import React, { useState, useReducer, createContext, useEffect } from "react";
import { Reducer } from './AppReducer';
import { getLocalStroage } from '../utils/utilFunc'

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const initState = getLocalStroage() ? getLocalStroage() : { incomeTrans: [], expenseTrans: [] }
    const [state, dispatch] = useReducer(Reducer, initState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}