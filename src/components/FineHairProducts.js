// FineHairProducts.js

import React from 'react';
import Header from './Header';
import './Products.css';

const fineHairProducts = [
  { id: 39, name: 'Wella Nourishment Mask', price: '$27.99', image: '/product39.png', reviews: '4.4/5', category: 'masks-creams' },
  { id: 40, name: 'Wella Nourishing Conditioner', price: '$31.99', image: '/product40.png', reviews: '4.5/5', category: 'conditioners' },
];

function FineHairProducts({ navigateTo }) {
  return (
    <div className="products">
      <Header navigateTo={navigateTo} />

      <div className="products-content">
        <h2>Fine Hair Products</h2>

        <div className="products-grid">
          {fineHairProducts.map((product) => (
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

export default FineHairProducts;
