// DryHairProducts.js
import React from 'react';
import Header from './Header';
import './Products.css';

const dryHairProducts = [
  { id: 2, name: 'Amika Nutrient Shampoo', price: '$24.99', image: '/product2.png', reviews: '5/5', category: 'shampoos' },
  { id: 3, name: 'Amika Nutrient Conditioner', price: '$24.99', image: '/product3.png', reviews: '4.8/5', category: 'conditioners' },
  { id: 4, name: 'Amika Nourishing Mask', price: '$31.99', image: '/product4.png', reviews: '4.7/5', category: 'masks-creams' },
  { id: 8, name: 'Olaplex Bonding Oil', price: '$27.99', image: '/product8.png', reviews: '4.4/5', category: 'sprays-oils' },
  { id: 12, name: 'Amika Moisture Mask', price: '$25.99', image: '/product12.png', reviews: '4.5/5', category: 'masks-creams' },
  { id: 39, name: 'Wella Nourishment Mask', price: '$27.99', image: '/product39.png', reviews: '4.4/5', category: 'masks-creams' },
  { id: 40, name: 'Wella Nourishing Conditioner', price: '$31.99', image: '/product40.png', reviews: '4.5/5', category: 'conditioners' },
];

function DryHairProducts({ navigateTo }) {
  return (
    <div className="products">
      <Header navigateTo={navigateTo} />

      <div className="products-content">
        <h2>Dry Hair Products</h2>

        <div className="products-grid">
          {dryHairProducts.map((product) => (
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

export default DryHairProducts;
