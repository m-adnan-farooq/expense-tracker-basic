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
        // console.log(transactions[0])
    }

    function expense(){
        var particulars =  document.getElementById('particulars').value;
        var amount = document.getElementById('amount').value;
        allTransactions.push({'expense': [particulars, amount]})
        transactions[1](JSON.parse(JSON.stringify(allTransactions)))
        // console.log(transactions[0])
    }
    return (
        <div>
            <h4>Add New Transaction</h4>
            <form className = 'new-transaction'>
                <input id = 'particulars' type = 'text' placeholder = 'Enter transaction particulars' required/>
                <input id = 'amount' type = 'number' placeholder = 'Enter amount' required/>
                <input type = 'button' value = 'Income' onClick={income} />
                <input type = 'button' value = 'Expense' onClick={expense} />
                <p>(Click on appropriate button to record the transaction)</p>
            </form>
        </div>
    )
}
