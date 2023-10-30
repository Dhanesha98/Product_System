// App.js
import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import products from './helper/products.json'; 


function App() {
  return (
    <div className="App">
      
      <ProductList products={products} />
    
    </div>
  );
}

export default App;
