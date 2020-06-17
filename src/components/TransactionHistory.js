import React from 'react'

export const TransactionHistory = () => {
    return (
        <>
            <h4 >Transaction Details</h4>
            <div className = 'inflow-outflow'>
                <div id = 'inflow-history'>Inflow</div>
                <div id = 'outflow-history'>Outflow</div>
            </div>
        </>
    )
}
