import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ incrementCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category")?.toLowerCase() || "";
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products`);
        const response_json = await response.json();
        const data = response_json.data || response_json;

        setProducts(data);

        const filtered = data.filter((p) => {
          const matchesSearch = p.name.toLowerCase().includes(searchTerm);
          const matchesCategory = category ? p.category === category : true;
          return matchesSearch && matchesCategory;
        });

        setFilteredProducts(filtered);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    fetchProducts();
  }, [category, searchTerm]);

  return (
    <div className="ProductList">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} incrementCart={incrementCart} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
