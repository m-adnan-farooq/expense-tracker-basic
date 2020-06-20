import React, {useContext} from 'react'
import GlobalContext from '../GlobalContext';
import {allTransactions} from '../GlobalContext';

export const TransactionHistory = () => {
    var income = 0;
    var expense = 0;    
    const thContext = useContext(GlobalContext)
    
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
    var netBalance =income-expense;
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
                            if(value.income){
                                return (
                                    <tr>
                                        <td className = 'particular-details'>{Object.values(value)[0][0]}</td>
                                        <td>{Object.values(value)[0][1]}</td>
                                        <td></td>
                                    </tr>
                                )
                            }
                            else{
                                return (
                                    <tr>
                                        <td className = 'particular-details'>{Object.values(value)[0][0]}</td>
                                        <td></td>
                                        <td>{Object.values(value)[0][1]}</td>
                                    </tr>
                                )
                            }
                        })}
                        <tr>
                            <td>Total</td>
                            <td>{income}</td>
                            <td>{expense}</td>
                        </tr>
                </table>
            </div>
            
        </>
    )
}
