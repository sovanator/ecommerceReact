import React from 'react';

const TableBody = (props) => {
    return ( 
         <>
        <tbody>{props.products.map(product=>
              <tr>
              <td>{product.title}</td>
              <td>{product.price}</td>
              
                  
        </tr>)}
        </tbody>
        </>
    );
}
 
export default TableBody;