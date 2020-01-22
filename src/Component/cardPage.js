import React, { Component, useState } from 'react';
import {storeProducts} from '../dataBase/data'
import Card from './card'
import ModalCart from './cartModal';


class CardPage extends Component {
    state = {
        storeProducts: storeProducts,
        isCartOpen: false
    }

      handleAddtoCart=()=>{
          
           this.renderModal()

      }
      renderModal=() =>{
          
            this.setState({
                isCartOpen:!this.state.isCartOpen
            })
            
          
            }
    render() { 
       
        return (
              
        <React.Fragment>
         <div className="row">
 
            {this.state.storeProducts.map(products=>
                
                    <div className="col-md-4">
                        <Card clickHandler={this.handleAddtoCart} key={products.id} img={products.img} title=   {products.title} info={products.info} />
                        <ModalCart img ={products.img} price={products.price} isOpen={this.state.isCartOpen} clickHandler={this.renderModal} />
                    </div>
               
               

                )}
        </div>
        </React.Fragment> 
          );
    }
}
 
export default CardPage;