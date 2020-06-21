import React, {useContext} from 'react';
import GlobalContext from '../GlobalContext';
import {allTransactions} from '../GlobalContext';

export const NewTransaction = () => {
    const transactions = useContext(GlobalContext);
    function income(){
        if (document.getElementById('amount').value>0){
        var particulars =  document.getElementById('particulars').value;
        var amount = document.getElementById('amount').value;
        allTransactions.push({'income': [particulars, amount]})
        transactions[1](JSON.parse(JSON.stringify(allTransactions)))}
        else{
            alert('Please enter a value greater than zero')
        }
        // console.log(transactions[0])
    }

    function expense(){
        if (document.getElementById('amount').value>0){
        var particulars =  document.getElementById('particulars').value;
        var amount = document.getElementById('amount').value;
        allTransactions.push({'expense': [particulars, amount]})
        transactions[1](JSON.parse(JSON.stringify(allTransactions)))}
        else{
            alert('Please enter a value greater than zero')
        }
        // console.log(transactions[0])
    }
    return (
        <div>
            <h4>Add New Transaction</h4>
            <form className = 'new-transaction'>
                <input id = 'particulars' type = 'text' placeholder = 'Enter transaction particulars' required/>
                <br />
                <input id = 'amount' type = 'number' placeholder = 'Enter amount' required/>
                <br />
                <input className='btn' type = 'button' value = 'Income' onClick={income} />
                <input className='btn' type = 'button' value = 'Expense' onClick={expense} />
                <p>(Click on appropriate button to record the transaction)</p>
            </form>
        </div>
    )
}
