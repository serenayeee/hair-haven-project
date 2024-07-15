// Product18.js

import React, { useState } from 'react';
import Header from './Header';
import './Product18.css'; 

const Product18 = ({ navigateTo }) => {
  const [quantity, setQuantity] = useState(1); 

  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="product18">
      <Header navigateTo={navigateTo} />

      <div className="product18-content">
        <div className="product-image-container">
          <img src="/product18.png" alt="Earthling Conditioner - Simple Fresh" className="product-image" />
        </div>

        <div className="product-details-container">
          <h2 className="product-title">Earthling Conditioner - Simple Fresh</h2>
          
          <div className="product-reviews">
            {[...Array(4)].map((_, index) => (
              <span key={index} className={index < 4 ? 'star-filled' : 'star-empty'}>&#9733;</span>
            ))}
            <span className="reviews-count">(4.6 reviews)</span>
          </div>

          <p className="product-price">$29.99</p>

          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <div className="quantity-input">
              <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              />
              <button className="quantity-btn" onClick={increaseQuantity}>+</button>
            </div>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>ADD TO CART</button>

          <div className="product-description">
            <h3>Description:</h3>
            <p>
              Earthling Conditioner - Simple Fresh delivers a refreshing and nourishing conditioning experience. Formulated with natural ingredients, it leaves your hair soft, shiny, and full of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product18;
