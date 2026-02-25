import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductList() {
  const products = useSelector((state) => state.products.items);

  return (
    <div>
      <h2>Product List</h2>
      <div style={{ display: "flex" }}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

/* Lab 6.3
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", description: "High performance laptop", image: "/image.jpg" },
  { id: 2, name: "Headphones", category: "Accessories", description: "Noise cancelling headphones", image: "/image.jpg" },
  { id: 3, name: "Smartwatch", category: "Wearables", description: "Fitness tracking smartwatch", image: "/image.jpg" },
];

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <div style={{ display: "flex" }}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

/*Lab 6.2
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {// Add multiple ProductCard components }
      <ProductCard
        name="Laptop"
        category="Electronics"
        description="High-performance laptop for everyday use."
        image="https://placehold.co/100x100"
      />
      <ProductCard
        name="Headphones"
        category="Accessories"
        description="Noise-cancelling over-ear headphones."
         image="https://placehold.co/100x100"
      />
      <ProductCard
        name="Smartwatch"
        category="Wearables"
        description="Track fitness and notifications on the go."
         image="https://placehold.co/100x100"
      />
    </div>
  )
}

export default ProductList;*/
