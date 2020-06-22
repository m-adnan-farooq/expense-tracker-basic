import React, {useContext} from 'react'
import GlobalContext from '../GlobalContext';
import {allTransactions} from '../GlobalContext';
import {NumberFormat} from './NumberFormat';

export const TransactionHistory = () => {
    

    const thContext = useContext(GlobalContext)
    var income = 0;
    var expense = 0;
    var balance = 0;
    for(var i =0;i<allTransactions.length;i++){
        if (allTransactions[i].income){
            income += parseFloat(allTransactions[i]['income'][1])
            }
        }
    
    for(var j =0;j<allTransactions.length;j++){
        if (allTransactions[j].expense){
            expense += parseFloat(allTransactions[j]['expense'][1])
            }
        }

    balance = income - expense;
    function del1(value, index){
        allTransactions.splice((index),1);
        thContext[1](JSON.parse(JSON.stringify(allTransactions)))
    }
    return (
        <div className = 'transaction-history'>
            <h2>Transaction Details</h2>            
            <div className = 'inflow-outflow'>
                <table>
                    <tr>
                        <th className='particulars-history'>Particulars</th>
                        <th className='inflow'>Income</th>
                        <th className='outflow'>Expense</th>
                    </tr>
                        {thContext[0].map((value, index) =>{
                            // var values = JSON.parse(JSON.stringify(value));
                            if(value.income){
                                return (
                                    <tr>
                                        <td className = 'particular-details'>
                                            <span>{Object.values(value)[0][0]}</span>
                                            <input className = 'btn1' type = 'button' value = 'Delete' onClick = {()=>{del1(value, index)}}></input>
                                        </td>
                                        <td className = 'value'>{NumberFormat(((Object.values(value)[0][1])))}</td>
                                        <td className = 'value'></td>
                                    </tr>
                                )
                            }
                            else{
                                return (
                                    <tr>
                                        <td className = 'particular-details'>
                                            <span>{Object.values(value)[0][0]}</span>
                                            <input className = 'btn1' type = 'button' value = 'Delete' onClick = {()=>{del1(value, index)}}></input>
                                            </td>
                                        <td className = 'value'></td>
                                        <td className = 'value'>{NumberFormat(Object.values(value)[0][1])}</td>
                                    </tr>
                                )
                            }
                        })}
                        <tr>
                            <td>Total</td>
                            <td>{NumberFormat(income)}</td>
                            <td>{NumberFormat(expense)}</td>
                        </tr>
                        <tr>
                            <td className = 'net-balance' colSpan='3'>Net Balance = Rs. {NumberFormat(balance)}</td>
                        </tr>
                </table>
            </div>
            
        </div>
    )
}
