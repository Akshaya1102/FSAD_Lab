import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ incrementCart, searchTerm }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  const perPage = 2;
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ prev: null, next: null, pages: 1 });

  // Fetch products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    fetchProducts();
  }, []); // only run on initial mount

  // Filter and paginate whenever products/searchTerm/page changes
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);

    // Pagination
    const totalPages = Math.ceil(filtered.length / perPage);
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const currentPageItems = filtered.slice(start, end);
    setPaginatedProducts(currentPageItems);

    setPagination({
      prev: page > 1 ? page - 1 : null,
      next: page < totalPages ? page + 1 : null,
      pages: totalPages,
    });
  }, [products, searchTerm, page]);

  return (
    <>
      <div className="ProductList">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} incrementCart={incrementCart} {...product} />
        ))}
      </div>

      <div className="Pagination">
        <button hidden={!pagination.prev} onClick={() => setPage(pagination.prev)}>Prev</button>
        <span style={{ margin: "0 1rem" }}>Page {page}</span>
        <button hidden={!pagination.next} onClick={() => setPage(pagination.next)}>Next</button>
      </div>
    </>
  );
}

export default ProductList;
