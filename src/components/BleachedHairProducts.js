import React from 'react';
import Header from './Header';
import './Products.css';

const bleachedHairProducts = [
  { id: 21, name: 'Amika Repair Cream', price: '$26.99', image: '/product21.png', reviews: '4.5/5', category: 'masks-creams' },
  { id: 22, name: 'Amika Repair Shampoo', price: '$31.99', image: '/product22.png', reviews: '4.8/5', category: 'shampoos' },
  { id: 23, name: 'Amika Repair Conditioner', price: '$20.99', image: '/product23.png', reviews: '4.1/5', category: 'conditioners' },
  { id: 24, name: 'Amika Repair Cream', price: '$38.99', image: '/product24.png', reviews: '4.7/5', category: 'masks-creams' },
  { id: 38, name: 'Wella Color Shampoo', price: '$31.99', image: '/product38.png', reviews: '4.6/5', category: 'shampoos' },
  { id: 39, name: 'Wella Nourishment Mask', price: '$27.99', image: '/product39.png', reviews: '4.4/5', category: 'masks-creams' },
  { id: 40, name: 'Wella Nourishing Conditioner', price: '$31.99', image: '/product40.png', reviews: '4.5/5', category: 'conditioners' },
];

function BleachedHairProducts({ navigateTo }) {
  return (
    <div className="products">
      <Header navigateTo={navigateTo} />

      <div className="products-content">
        <h2>Bleached Hair Products</h2>

        <div className="products-grid">
          {bleachedHairProducts.map((product) => (
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

export default BleachedHairProducts;
