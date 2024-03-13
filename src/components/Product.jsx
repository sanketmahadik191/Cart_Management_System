// src/Product.js
import React from 'react';
import styles from "./Product.css";

const Product = ({ location,name, price, quantity, increaseQuantity, decreaseQuantity, removeProduct }) => {
  return (
    <div className="product-container">
      <img src={location}></img>
      <div className="product-details">
        <div className="product-name">{name}</div>
        <div className="product-price">Price: ${price}</div>
        <button type="button" class="btn btn-secondary" onClick={removeProduct}>Remove</button>
      </div>
      <div className="product-buttons">
        <button type="button" class="btn btn-primary"onClick={increaseQuantity}>+</button>
        <div className="product-quantity">{quantity}</div>
        <button type="button" class="btn btn-danger" onClick={decreaseQuantity}>-</button>
       
      </div>
    </div>
  );
};

export default Product;

