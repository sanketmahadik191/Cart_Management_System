// src/App.js
import React, { useState } from 'react';
import Product from './components/Product';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1,url:"https://www.course-api.com/images/cart/phone-1.png", name: 'Samsung Galaxy S8', price: 399, quantity: 1 },
    { id: 2,url:"https://www.course-api.com/images/cart/phone-2.png", name: 'Google Pixel', price: 299, quantity: 1 },
    { id: 3,url:"https://www.course-api.com/images/cart/phone-3.png", name: 'Xiaomi Redmi Note 2', price: 699, quantity: 1 },
    { id: 4,url:"https://www.course-api.com/images/cart/phone-4.png", name: 'Samsung Galaxy S7', price: 499, quantity: 1 }
  ]);

  const increaseQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const decreaseQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: Math.max(product.quantity - 1, 0) } : product
    ));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const totalProducts = products.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <div className="app">
    <nav className="navbar">
      <div className="navbar-left">Cart</div>
      <div className="navbar-right">Total Products: {totalProducts}</div>
    </nav>
    <div className="products">
      {products.map(product => (
        <Product
          key={product.id}
          location={product.url}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          increaseQuantity={() => increaseQuantity(product.id)}
          decreaseQuantity={() => decreaseQuantity(product.id)}
          removeProduct={() => removeProduct(product.id)}
        />
      ))}
    </div>
    <div className='total'>
       <h1>Total Price</h1>
      <div>${totalPrice}</div>
      </div>
    </div>
  );
}

export default App;
