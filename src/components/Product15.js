// Product15.js

import React, { useState } from 'react';
import Header from './Header';
import './Product15.css'; 

const Product15 = ({ navigateTo }) => {
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
    <div className="product15">
      <Header navigateTo={navigateTo} />

      <div className="product15-content">
        <div className="product-image-container">
          <img src="/product15.png" alt="Earthling Shampoo - Citrus Sun" className="product-image" />
        </div>

        <div className="product-details-container">
          <h2 className="product-title">Earthling Shampoo - Citrus Sun</h2>
          
          <div className="product-reviews">
            {[...Array(4)].map((_, index) => (
              <span key={index} className={index < 4 ? 'star-filled' : 'star-empty'}>&#9733;</span>
            ))}
            <span className="reviews-count">(4.3 reviews)</span>
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
              Earthling Shampoo - Citrus Sun provides a zesty and refreshing cleanse with the essence of citrus. Formulated with eco-friendly ingredients, this shampoo invigorates and revitalizes your hair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product15;

