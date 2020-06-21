import React, {useContext} from 'react'
import GlobalContext from '../GlobalContext';
import {allTransactions} from '../GlobalContext';
// import {balanceState} from './Balance'

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
        <>
            <h4 >Transaction Details</h4>            
            <div className = 'inflow-outflow'>
                <table>
                    <tr>
                        <th className='particulars-history'>Particulars</th>
                        <th className='inflow'>Inflow</th>
                        <th className='outflow'>Outflow</th>
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
                                        <td className = 'value'>{Object.values(value)[0][1]}</td>
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
                                        <td className = 'value'>{Object.values(value)[0][1]}</td>
                                    </tr>
                                )
                            }
                        })}
                        <tr>
                            <td>Total</td>
                            <td>{income}</td>
                            <td>{expense}</td>
                        </tr>
                        <tr>
                            <td className = 'net-balance' colSpan='3'>Net Balance = {balance}</td>
                        </tr>
                </table>
            </div>
            
        </>
    )
}
