import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Shop from './components/Shop/shop';


function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Product></Product>
    </div>
  );
}

export default App;
