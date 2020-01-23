import React from 'react';
import {Modal, ModalBody, Button, ModalFooter} from 'reactstrap'


const ModalCart = (props) => {
   
    return ( 
        <React.Fragment>
            <Modal isOpen={props.isItemAddedOpen} >
                <ModalBody>
                    <h1>Item Added to Cart</h1>
                  <img src={props.img} className="rounded float-left" alt="this is a image" />
                   <h2> Unit Price: {props.price}</h2>

                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-primary " 
                            onClick={()=>props.gotoCart(props.products)}  >Go To Cart</Button>
                    <Button className="btn btn-primary" onClick={()=>props.clickHandler(props.products)} >Continue Shopping</Button>
                </ModalFooter>
            </Modal>

        
        </React.Fragment> 
     );
}
 
export default ModalCart;