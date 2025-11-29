import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0); // For dummy re-render
  const [searchParams] = useSearchParams();

  // Get search term from URL
  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  // useMemo to avoid filtering on every re-render
 const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    const term = searchTerm.toLowerCase();
    return products.filter((p) => p.name.toLowerCase().includes(term));
  }, [products, searchTerm]);

// without useMemo filtering on every re-render
/*const term = searchTerm.toLowerCase();
const filteredProducts = products.filter((p) => {
  console.log('Filtering products...');
  return p.name.toLowerCase().includes(term);
});*/

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setCount((c) => c + 1)}>
          Trigerring Re-render - Count: {count}
        </button>
      </div>

      <div className="ProductList">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;

