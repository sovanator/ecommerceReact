import React, { Component } from 'react';
import {storeProducts} from '../dataBase/data'
import Card from './card'
import ModalCart from './cartModal';
import NavBar from './navBar'
import RealCart from './realModalCart';
import ProductsHome from './productsHome';


class CardPage extends Component {
    state = {
        storeProducts: storeProducts,
        cartProducts:[],
        cartOut:[false]
        
       
    }

     
      renderModal=(products) =>{
          
          const storeProducts = [...this.state.storeProducts]
          const index = storeProducts.indexOf(products)
          storeProducts[index] = {...storeProducts[index]}
          storeProducts[index].isItemAddedOpen =!storeProducts[index].isItemAddedOpen  

         const cartProducts = this.state.storeProducts[index].isItemAddedOpen ? [...this.state.cartProducts]: [...this.state.cartProducts, products] 
            this.setState({
                storeProducts, cartProducts
            })
            console.log(cartProducts)
            
            }

            gotoCart =(products)=>{
                const storeProducts = [...this.state.storeProducts]
                const index = storeProducts.indexOf(products)
                storeProducts[index] = {...storeProducts[index]}
                storeProducts[index].isItemAddedOpen =!storeProducts[index].isItemAddedOpen
                storeProducts[index].isCartOpen =!storeProducts[index].isCartOpen
                const cartOut = [...this.state.cartOut]
                cartOut[0] = !this.state.cartOut[0]
               this.setState({storeProducts, cartOut})
               
               




            }
            closeCart = ()=>{
                const cartOut = [...this.state.cartOut]
                cartOut[0] = !this.state.cartOut[0]
                this.setState({cartOut})
            }
          
    render() { 
       
        return (
              
        <React.Fragment>
        <NavBar gotoCart={this.gotoCart} cartProduct={this.state.cartProducts}/>
        <ProductsHome />
        <div className="container">
         <div className="row">
 
            {this.state.storeProducts.map(products=>
                    
                    <div className="col-md-4">
                        <Card clickHandler={this.renderModal} products={products} key={products.id} img={products.img} title=  {products.title} info={products.info} />
                        <ModalCart gotoCart={this.gotoCart} products ={products} img ={products.img} price={products.price} isItemAddedOpen={products.isItemAddedOpen} clickHandler={this.renderModal} />
                    </div>
               
               

                )}

        </div>
        </div>
        <RealCart isItemAddedOpen={this.state.cartOut[0]} cartProduct={this.state.cartProducts} closeCart={this.closeCart} />
        </React.Fragment> 
          );
    }
}

 
export default CardPage;