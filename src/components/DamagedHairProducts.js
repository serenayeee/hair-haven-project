// DamagedHairProducts.js
import React from 'react';
import Header from './Header';
import './Products.css';

const damagedHairProducts = [
  { id: 5, name: 'Olaplex Bond Smoother', price: '$34.99', image: '/product5.png', reviews: '4.2/5', category: 'masks-creams' },
  { id: 6, name: 'Olaplex Bond Shampoo', price: '$34.99', image: '/product6.png', reviews: '4.9/5', category: 'shampoos' },
  { id: 7, name: 'Olaplex Bond Conditioner', price: '$34.99', image: '/product7.png', reviews: '4.6/5', category: 'conditioners' },
  { id: 8, name: 'Olaplex Bonding Oil', price: '$27.99', image: '/product8.png', reviews: '4.4/5', category: 'sprays-oils' },
  { id: 21, name: 'Amika Repair Cream', price: '$26.99', image: '/product21.png', reviews: '4.5/5', category: 'masks-creams' },
  { id: 22, name: 'Amika Repair Shampoo', price: '$31.99', image: '/product22.png', reviews: '4.8/5', category: 'shampoos' },
  { id: 23, name: 'Amika Repair Conditioner', price: '$20.99', image: '/product23.png', reviews: '4.1/5', category: 'conditioners' },
  { id: 24, name: 'Amika Repair Cream', price: '$38.99', image: '/product24.png', reviews: '4.7/5', category: 'masks-creams' },
  { id: 39, name: 'Wella Nourishment Mask', price: '$27.99', image: '/product39.png', reviews: '4.4/5', category: 'masks-creams' },
  { id: 40, name: 'Wella Nourishing Conditioner', price: '$31.99', image: '/product40.png', reviews: '4.5/5', category: 'conditioners' },
];

function DamagedHairProducts({ navigateTo }) {
  return (
    <div className="products">
      <Header navigateTo={navigateTo} />

      <div className="products-content">
        <h2>Damaged Hair Products</h2>

        <div className="products-grid">
          {damagedHairProducts.map((product) => (
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

export default DamagedHairProducts;
