// Product19.js

import React, { useState } from 'react';
import Header from './Header';
import './Product19.css'; 

const Product19 = ({ navigateTo }) => {
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
    <div className="product19">
      <Header navigateTo={navigateTo} />

      <div className="product19-content">
        <div className="product-image-container">
          <img src="/product19.png" alt="Earthling Conditioner - Cool Breeze" className="product-image" />
        </div>

        <div className="product-details-container">
          <h2 className="product-title">Earthling Conditioner - Cool Breeze</h2>
          
          <div className="product-reviews">
            {[...Array(4)].map((_, index) => (
              <span key={index} className={index < 4 ? 'star-filled' : 'star-empty'}>&#9733;</span>
            ))}
            <span className="reviews-count">(4.4 reviews)</span>
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
              Earthling Conditioner - Cool Breeze provides a refreshing conditioning experience with a delightful scent. It leaves hair smooth, soft, and easy to manage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product19;
