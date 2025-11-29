import { useState, useCallback, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useCart } from './context/CartContext';

function ProductList() {
  const [products, setProducts] = useState([]);
   const [count, setCount] = useState(0); // For dummy re-render
  const { incrementCart } = useCart();

  // useCallback ensures this function is not recreated on every render
  const handleAddToCart = useCallback((name) => {
    console.log(`Added ${name} to cart`);
    incrementCart();
  }, [incrementCart]);

  /*const handleAddToCart = (name) => {
    console.log(`Added ${name} to cart`);
    incrementCart();
  };*/
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

  return (
    <>
    <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setCount((c) => c + 1)}>
          Trigerring Re-render - Count: {count}
        </button>
      </div>
    <div className="ProductList">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
    </>
  );
}

export default ProductList;
