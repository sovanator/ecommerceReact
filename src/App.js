import React from 'react';
import Products from './Component/products'
import CardPage from './Component/cardPage'
import './App.css'; 
import NavBar from './Component/navBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Products />
      <CardPage />
    </React.Fragment>
  );
}

export default App;
