
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ incrementCart, searchTerm }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products`); // no pagination
        const response_json = await response.json();
        const data = response_json.data || response_json; 

        setProducts(data);

        const term = searchTerm.toLowerCase();
        const filtered = term
          ? data.filter(p => p.name.toLowerCase().includes(term))
          : data;

        setFilteredProducts(filtered);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <div className="ProductList">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} incrementCart={incrementCart} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
