import React, { useState } from 'react';
import Header from './Header';
import './Product21.css'; 

const Product21 = ({ navigateTo }) => {
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
    <div className="product21">
      <Header navigateTo={navigateTo} />

      <div className="product21-content">
        <div className="product-image-container">
          <img src="/product21.png" alt="Amika Repair Cream" className="product-image" />
        </div>

        <div className="product-details-container">
          <h2 className="product-title">Amika Repair Cream</h2>
          
          <div className="product-reviews">
            {[...Array(4)].map((_, index) => (
              <span key={index} className={index < 4 ? 'star-filled' : 'star-empty'}>&#9733;</span>
            ))}
            <span className="reviews-count">(4.5 reviews)</span>
          </div>

          <p className="product-price">$26.99</p>

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
              Amika Repair Cream is formulated to repair and strengthen damaged hair. It provides deep conditioning and nourishment, leaving hair soft, smooth, and healthier-looking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product21;
