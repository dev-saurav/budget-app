import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import AddIncomeForm from './components/AddIncomeExpanses';
import TransactionList from './components/TransactionList';
import { AppContextProvider } from './context/AppContext';
function App() {
  return (
    <AppContextProvider>
      <div className="container">
        <div className="app-container">
          <div className="column">
            <Header />
            <Balance />
            <IncomeExpenses />
          </div>
          <div className="column">
            <AddIncomeForm type={"income"} />
            <TransactionList type={"income"} />
          </div>
          <div className="column">
            <AddIncomeForm type={"expense"} />
            <TransactionList type={"expense"} />
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
