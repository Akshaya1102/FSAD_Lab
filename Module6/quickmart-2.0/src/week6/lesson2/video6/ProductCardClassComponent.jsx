import React, { Component } from 'react';
import './ProductCard.css';

class ProductCardClassComponent extends Component {
  render() {
    const name = "Fresh Apples";
    const price = 120;

    return (
    <div className="ProductCard">
      <h2>Class Component</h2>
      <img src="/assets/images/apple.jpg" alt={name} />
      <h2>{name}</h2>
      <p>₹{price}/kg</p>
    </div>
    );
  }
}

export default ProductCardClassComponent;
