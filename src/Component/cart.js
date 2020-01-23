import React from 'react';
import TableHeader from './tableHeaderCart'
import TableBody from './tableBody'
const Cart = () => {
    return ( 
        <React.Fragment>
            
             <h1> This is your Cart</h1>
             <table className="table">
                <TableHeader />
                <TableBody />
             </table>
        </React.Fragment>

     );
}
 
export default Cart;