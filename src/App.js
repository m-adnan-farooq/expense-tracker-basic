import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import {Balance} from './components/Balance';
import {TransactionHistory} from './components/TransactionHistory';
import {NewTransaction} from './components/NewTransaction';
import GlobalContext from './GlobalContext';

function App() {
  const [transactions, addTransation] = useState([]);  //The use of state here will re-render the components when the state is updated

  return (
    <div className = "App">
      <Header />
      <GlobalContext.Provider value = {[transactions, addTransation]}>
      <Balance />
      <TransactionHistory />
      <NewTransaction/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
