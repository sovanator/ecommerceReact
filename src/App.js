import React from 'react';
import './App.css'; 
import {Route, Redirect, Switch} from 'react-router-dom'
import NavBar from './Component/navBar';
import ProductsHome from './Component/productsHome'
import CardPage from './Component/cardPage'
import Cart from './Component/cart'


function App() {
  return (
    <React.Fragment>
      <NavBar />
     
      <main className="container">
      <Switch>
        <Route path="/mycart" component={Cart}/>
        <Route path="/" component={ProductsHome}/>
       
       <CardPage />
        
      </Switch>
    </main>
    </React.Fragment>
    
  );
}

export default App;
