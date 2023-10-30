import React, { useState, useEffect } from 'react';

const Product = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [product.images]);

  

  return (
    <div className="product">
      <div className="product-image-container" >
        <img
          src={require(`../assets/${product.images[imageIndex]}`)}
          alt={product.name}
          className="product-image"
        />
      </div>
          <h2 className="title"><b>{product.name}</b></h2>
          <p className="price"><b>Price: ${product.price}</b></p>
          <p > Quantity: - <b>{product.quantity} </b> +</p>
         
        </div>
     
  );
};

export default Product;
