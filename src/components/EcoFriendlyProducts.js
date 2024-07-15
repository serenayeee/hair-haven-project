// EcoFriendlyProducts.js
import React from 'react';
import Header from './Header';
import './Products.css';

const ecoFriendlyProducts = [
  { id: 13, name: 'Earthling Shampoo - Vanilla Coconut', price: '$29.99', image: '/product13.png', reviews: '4.6/5', category: ['shampoos', 'eco-friendly'] },
  { id: 14, name: 'Earthling Shampoo - Cool Breeze', price: '$29.99', image: '/product14.png', reviews: '4.9/5', category: ['shampoos', 'eco-friendly'] },
  { id: 15, name: 'Earthling Shampoo - Citrus Sun', price: '$29.99', image: '/product15.png', reviews: '4.3/5', category: ['shampoos', 'eco-friendly'] },
  { id: 16, name: 'Earthling Shampoo - Simple Fresh', price: '$29.99', image: '/product16.png', reviews: '4.7/5', category: ['shampoos', 'eco-friendly'] },
  { id: 17, name: 'Earthling Conditioner - Wild Vanilla', price: '$29.99', image: '/product17.png', reviews: '4.2/5', category: ['conditioners', 'eco-friendly'] },
  { id: 18, name: 'Earthling Conditioner - Simple Fresh', price: '$29.99', image: '/product18.png', reviews: '4.6/5', category: ['conditioners', 'eco-friendly'] },
  { id: 19, name: 'Earthling Conditioner - Cool Breeze', price: '$29.99', image: '/product19.png', reviews: '4.4/5', category: ['conditioners', 'eco-friendly'] },
  { id: 20, name: 'Earthling Conditioner - Unscented', price: '$29.99', image: '/product20.png', reviews: '4.5/5', category: ['conditioners', 'eco-friendly'] },
];

function EcoFriendlyProducts({ navigateTo }) {
  return (
    <div className="products">
      <Header navigateTo={navigateTo} />

      <div className="products-content">
        <h2>Eco-Friendly Products</h2>

        <div className="products-grid">
          {ecoFriendlyProducts.map((product) => (
            <div key={product.id} className="product-item" onClick={() => navigateTo(`product${product.id}`)}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-reviews">Reviews: {product.reviews}</p>
                <button className="add-to-cart-btn">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EcoFriendlyProducts;
