import React, { useState, useEffect } from 'react';
import './ProductsPage.css';
import ProductItem from './ProductItem';
import AddProductForm from './AddProductForm';
// Main Products Page Component
const ProductsPage = ({token}) => {
  const [products, setProducts] = useState([]);
  
  // Fetch products from API 
  useEffect(() => {
       const fetchProducts = async () => {
      try {
        
        const response = await fetch('http://localhost:3000/products', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [token]);

  // Function to add a new product to the list
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="products-page">
      <h2>Add New Product</h2>
      <AddProductForm onAddProduct={handleAddProduct} />
      <h2>List of Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
