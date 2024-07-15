import React, { useState } from 'react';
import Header from './Header';
import './Product32.css'; 

const Product32 = ({ navigateTo }) => {
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
    <div className="product32">
      <Header navigateTo={navigateTo} />

      <div className="product32-content">
        <div className="product-image-container">
          <img src="/product32.png" alt="Babybliss Curler" className="product-image" />
        </div>

        <div className="product-details-container">
          <h2 className="product-title">Babybliss Curler</h2>
          
          <div className="product-reviews">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < 4.5 ? 'star-filled' : 'star-empty'}>&#9733;</span>
            ))}
            <span className="reviews-count">(4.5 reviews)</span>
          </div>

          <p className="product-price">$74.99</p>

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
              The Babybliss Curler is designed for effortless curls and waves, featuring advanced heat settings and a ceramic barrel for smooth styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product32;
