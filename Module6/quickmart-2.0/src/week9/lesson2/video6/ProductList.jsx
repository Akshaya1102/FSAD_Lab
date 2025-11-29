import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
  const [products,setProducts] = useState([]);
  const perPage = 2;
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || '';
  const page = parseInt(searchParams.get("page") || "1", 10);
  const [pagination, setPagination] = useState({  prev: null,
                                                  next: null,
                                                  pages: 1 });

  useEffect(() => {
      const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products?_page=${page}&_per_page=${perPage}`);
        const response_json = await response.json();
        console.log(response_json);
        const data = response_json.data;
        console.log(data);
        setProducts(data);
        setPagination({prev: response_json.prev,
                       next: response_json.next,
                       pages: response_json.pages});
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };
    fetchProducts();
  }, [products,page]); // runs everytime page is changed by user 


  // Use useMemo to compute filtered products
  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    return filtered;
  }, [products, searchTerm]);


  return (
    <>
      <div className={"ProductList"}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className = "Pagination">
          <button hidden={!pagination.prev} onClick={() => setSearchParams({ search: searchTerm, page: pagination.prev })}>Prev</button>
          <span style={{ margin: "0 1rem" }}>Page {page}</span>
          <button hidden={!pagination.next} onClick={() => setSearchParams({ search: searchTerm, page: pagination.next })}>Next</button>
      </div>
    </>
  );
}

export default ProductList;