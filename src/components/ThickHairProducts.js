import React from 'react';
import Header from './Header';
import './Products.css';

const thickHairProducts = [
  { id: 8, name: 'Olaplex Bonding Oil', price: '$27.99', image: '/product8.png', reviews: '4.4/5', category: 'sprays-oils' },
  { id: 12, name: 'Amika Moisture Mask', price: '$25.99', image: '/product12.png', reviews: '4.5/5', category: 'masks-creams' },
  { id: 37, name: 'Wella Coarse Shampoo', price: '$31.99', image: '/product37.png', reviews: '4.2/5', category: 'shampoos' },
  { id: 39, name: 'Wella Nourishment Mask', price: '$27.99', image: '/product39.png', reviews: '4.4/5', category: 'masks-creams' },
];

function ThickHairProducts({ navigateTo }) {
  return (
    <div className="products">
      <Header navigateTo={navigateTo} />

      <div className="products-content">
        <h2>Thick Hair Products</h2>

        <div className="products-grid">
          {thickHairProducts.map((product) => (
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

export default ThickHairProducts;
