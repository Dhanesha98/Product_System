// ProductList.js
import React from 'react';
import Product from '../pages/Product';
import Navbar from './Navbar';
import Footer from './Footer';



const ProductList = ({ products }) => {
  return (
    <div>
    <Navbar />
    <div className='menu'>
      <h1>Our Menu</h1>
    </div>
   
    <div className="product-list">
     
    {products.map((product, index) => (
        <div key={index} className="product-column">
          <Product product={product} />
        </div>
      ))}
    </div>
    <Footer />
  </div>

   
  );
};

export default ProductList;
