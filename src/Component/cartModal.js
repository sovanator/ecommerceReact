import React, { useState } from 'react';
import {Modal, ModalBody, Button, ModalFooter} from 'reactstrap'

const ModalCart = (props) => {
    const [setModal] = useState(false);
    const toggle = () => setModal
    return ( 
        <React.Fragment>
            <Modal isOpen={props.isOpen} >
                <ModalBody>
                    <h1>Item Added to Cart</h1>
                   <img src={props.img} className="rounded float-left" alt="this is a image" />
                   <h2> Unit Price: {props.price}</h2>

                </ModalBody>
                <ModalFooter>
                    <Button >Go To Cart</Button>
                    <Button onClick={()=>props.clickHandler()} >Continue Shopping</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
     );
}
 
export default ModalCart;