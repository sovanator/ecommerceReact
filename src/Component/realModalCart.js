import React,{Component} from 'react';
import {Modal, ModalFooter, ModalBody, Button} from 'reactstrap'
import TableHeader from './tableHeaderCart'
import TableBody from './tableBody';

class RealCart extends Component {
    state = {  }
    render() { 
        return (    
             <Modal  isOpen={this.props.isItemAddedOpen}>
            <ModalBody>
                <table className="table">
               <TableHeader />
               <TableBody products={this.props.cartProduct} />
               </table>
               <ModalFooter>
                    <Button className="btn btn-primary ">CheckOut</Button>
                    <Button className="btn btn-primary " onClick={()=>this.props.closeCart()}>Continue Shopping</Button>
                    
                </ModalFooter>
            </ModalBody>
           
        </Modal> );
    }
}
 
export default RealCart;