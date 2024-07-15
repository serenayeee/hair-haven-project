import React, { useState } from 'react';
import Header from './Header';
import './Product1.css'; 

const Product1 = ({ navigateTo }) => {
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
    <div className="product1">
      <Header navigateTo={navigateTo} />

      <div className="product1-content">
        <div className="product-image-container">
          <img src="/product1.png" alt="Amika Dry Shampoo" className="product-image" />
        </div>

        <div className="product-details-container">
          <h2 className="product-title">Amika Dry Shampoo</h2>
          
          <div className="product-reviews">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < 4 ? 'star-filled' : 'star-empty'}>&#9733;</span>
            ))}
            <span className="reviews-count">(8 reviews)</span>
          </div>

          <p className="product-price">$19.99</p>

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
              Amika Dry Shampoo is a lightweight, talc-free formula that absorbs excess oil, product buildup, and impurities. 
              It extends the life of your hairstyle while leaving hair feeling clean, refreshed, and full of volume.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;
