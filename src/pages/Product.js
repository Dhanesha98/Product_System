import React, { useState, useEffect } from 'react';

const Product = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [product.images]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product">
      <div className="product-image-container" onClick={toggleDetails}>
        <img
          src={require(`../assets/${product.images[imageIndex]}`)}
          alt={product.name}
          className="product-image"
        />
      </div>
      <h2 className="title"><b>{product.name}</b></h2>
          <p className="price"><b>Price: ${product.price}</b></p>
      {showDetails && (
        <div className="details">
         
          <p>Quantity: {product.quantity}</p>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
