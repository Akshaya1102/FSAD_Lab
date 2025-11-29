import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({incrementCart}) {
  const [products,setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || '';
 

  useEffect(() => {
      const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products`);
        const response_json = await response.json();
        console.log(response_json);
        const data = response_json.data || response_json;
        console.log(data);
        setProducts(data);
       
       const filtered = data.filter((p) => {
          const matchesSearch = p.name.toLowerCase().includes(searchTerm);
                    return matchesSearch;
        });
        setFilteredProducts(filtered);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };
    fetchProducts();
  }, [searchTerm]); // runs everytime page is changed by user or search term is entered

  return (
    <>
      <div className={"ProductList"}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} incrementCart= {incrementCart} {...product} />
        ))}
      </div>
      
    </>
  );
}

export default ProductList;