import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({incrementCart}) {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    // Simulate backend fetch
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };
    fetchProducts();
  }, []); // empty deps => runs only once after mount


  return (
    <div className={"ProductList"}>
      {products.map((product) => (
        <ProductCard key={product.id} incrementCart= {incrementCart} {...product} />
      ))}
    </div>
  );
}

export default ProductList;