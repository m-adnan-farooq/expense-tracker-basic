import React, {useContext} from 'react';
import GlobalContext from '../GlobalContext';
import {allTransactions} from '../GlobalContext';

export const NewTransaction = () => {
    const transactions = useContext(GlobalContext);
    function income(){
        var particulars =  document.getElementById('particulars').value;
        var amount = document.getElementById('amount').value;
        allTransactions.push({'income': [particulars, amount]})
        transactions[1](JSON.parse(JSON.stringify(allTransactions)))
        console.log(transactions[0])
    }
    
    
    return (
        <div>
            <h4>Add New Transaction</h4>
            <form className = 'new-transaction'>
                <div> {JSON.stringify(transactions[0])}</div>
                <input id = 'particulars' type = 'text' placeholder = 'Enter transaction particulars' required/>
                <input id = 'amount' type = 'number' placeholder = 'Enter amount' required/>
                <button onClick={income} >Income</button>
                <button>Expense</button>
                <p>(Click on appropriate button to record the transaction)</p>
            </form>
        </div>
    )
}
