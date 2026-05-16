import React, { useState } from 'react';
import { products as allProducts } from '../data/products';
import './products.css';

function ProductGrid({ addToCart }) {
  // Phase 3: Manual Feature Setup
  // We set up the UI, you will write the logic to filter `displayProducts` based on the `activeCategory`.
  const [activeCategory, setActiveCategory] = useState('All');
  
  // HINT FOR LATER: Instead of just returning allProducts, 
  // you will filter it based on activeCategory!
  const displayProducts = allProducts; 

  const categories = ['All', 'Electronics', 'Home & Kitchen', 'Books'];

  return (
    <div className="product-grid-container">
      
      {/* Category Filter UI */}
      <div className="category-filters">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {displayProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.imageURL} alt={product.title} className="product-image" />
            </div>
            <h3 className="product-title">{product.title}</h3>
            <div className="product-rating">
              {'★'.repeat(Math.floor(product.rating))} 
              {'☆'.repeat(5 - Math.floor(product.rating))} 
              <span style={{color: '#007185', marginLeft: '5px'}}>{product.rating}</span>
            </div>
            <div className="product-price">
              <span>$</span>{Math.floor(product.price)}<span>{(product.price % 1).toFixed(2).substring(1)}</span>
            </div>
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
