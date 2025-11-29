import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({incrementCart,searchTerm}) {
  const [products,setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Simulate backend fetch
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //const response = await fetch('/assets/products.json');
          const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };
    fetchProducts();
  }, []); // empty deps => runs only once after mount


  // Filter whenever searchTerm changes
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  }, [searchTerm]);


  return (
    <div className={"ProductList"}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} incrementCart= {incrementCart} {...product} />
      ))}
    </div>
  );
}

export default ProductList;