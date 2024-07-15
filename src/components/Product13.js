// Product13.js

import React, { useState } from 'react';
import Header from './Header';
import './Product13.css'; 

const Product13 = ({ navigateTo }) => {
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
    <div className="product13">
      <Header navigateTo={navigateTo} />

      <div className="product13-content">
        <div className="product-image-container">
          <img src="/product13.png" alt="Earthling Shampoo - Vanilla Coconut" className="product-image" />
        </div>

        <div className="product-details-container">
          <h2 className="product-title">Earthling Shampoo - Vanilla Coconut</h2>
          
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
              Earthling Shampoo - Vanilla Coconut provides a luxurious, natural cleanse with a delightful vanilla coconut scent. Made from eco-friendly ingredients, it ensures your hair feels refreshed and revitalized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product13;

