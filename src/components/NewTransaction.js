import React, {useContext} from 'react';
import GlobalContext from '../GlobalContext';
import {allTransactions} from '../GlobalContext';

export const NewTransaction = () => {
    const transactions = useContext(GlobalContext);
    
    function income(){
        var amount = document.getElementById('amount').value;
        var particulars =  document.getElementById('particulars').value;
        if (amount>0){
            if (document.getElementById('particulars').value!==''){
                if(amount - Math.floor(amount)>0){
                alert(`Decimal figures are not allowed
The nearest whole numbers are ${Math.floor(amount)} and ${Math.ceil(amount)}`)

                }
                else{
                allTransactions.push({'income': [particulars, amount]})
                transactions[1](JSON.parse(JSON.stringify(allTransactions)))
                document.getElementById('particulars').value ='';
                document.getElementById('amount').value ='';
                }
            }
            else{
                alert('Please Enter Transaction Details')
                }
        }
        else{
            alert('Please enter a value greater than zero')
        }
    }

    function expense(){
        var amount =document.getElementById('amount').value;
        var particulars =  document.getElementById('particulars').value;   
        if (amount>0){
            if (document.getElementById('particulars').value!==''){
                if (amount - Math.floor(amount)>0){
                    alert(`Decimal figures are not allowed
The nearest whole numbers are ${Math.floor(amount)} and ${Math.ceil(amount)}`)
                }
                else{
            allTransactions.push({'expense': [particulars, amount]})
            transactions[1](JSON.parse(JSON.stringify(allTransactions)))
            document.getElementById('particulars').value ='';
            document.getElementById('amount').value ='';
                  }
               }
            else{
                alert('Please Enter Transaction Details')
                }
            }
        
        else{
            alert('Please enter a value greater than zero')
        }
        
    }
    return (
        <div className = 'newTransaction'>
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
