import React, { useState} from 'react';
import Product from '../pages/Product';
import Navbar from './Navbar';
import Footer from './Footer';
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductList = ({ products }) => {
  const [items, setItems] = useState(products.slice(0, 8)); // Display the first 8 products
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    // Simulate loading more items, e.g., by adding the next batch of products
    const nextBatch = products.slice(items.length, items.length + 8); // Change 8 to the desired batch size
    if (nextBatch.length === 0) {
      setHasMore(false); // No more items to load
    } else {
      setItems([...items, ...nextBatch]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='menu'>
        <h1>Our Products</h1>
      </div>
      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className="product-list">
          {items.map((product, index) => (
            <div key={index} className="product-column">
              <Product product={product} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
      <Footer />
    </div>
  );
};

export default ProductList;
