import React from 'react';
import Header from './Header';
import './Products.css';

const curlyHairProducts = [
  { id: 9, name: 'SheaMoisture Coconut & Hibiscus Curl Enhancing Smoothie', price: '$13.49', image: '/product9.png', reviews: '4.6/5', category: 'creams' },
  { id: 10, name: 'DevaCurl No-Poo Original Zero Lather Conditioning Cleanser', price: '$28.00', image: '/product10.png', reviews: '4.5/5', category: 'shampoos' },
  { id: 11, name: 'Moroccanoil Curl Defining Cream', price: '$34.00', image: '/product11.png', reviews: '4.7/5', category: 'creams' },
  { id: 12, name: 'SheaMoisture Coconut & Hibiscus Curl & Shine Conditioner', price: '$10.99', image: '/product12.png', reviews: '4.3/5', category: 'conditioners' },
];

function CurlyHairProducts({ navigateTo }) {
  return (
    <div className="products">
      <Header navigateTo={navigateTo} />

      <div className="products-content">
        <h2>Curly Hair Products</h2>

        <div className="products-grid">
          {curlyHairProducts.map((product) => (
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

export default CurlyHairProducts;
