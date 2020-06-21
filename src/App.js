import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import {TransactionHistory} from './components/TransactionHistory';
import {NewTransaction} from './components/NewTransaction';
import GlobalContext from './GlobalContext';

function App() {
  const [transactions, addTransation] = useState([]);  //The use of state here will re-render the components when the state is updated

  return (
    <div className = "App">
      <Header />
      <GlobalContext.Provider value = {[transactions, addTransation]}>
      <TransactionHistory />
      <NewTransaction/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
