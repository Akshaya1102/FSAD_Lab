import { useParams } from "react-router-dom";

/* Product data is duplicated for simplicity, to create a quick standalone example */
const products = [
  { id: 1, name: "Laptop", category: "Electronics", description: "High performance laptop", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Headphones", category: "Accessories", description: "Noise cancelling headphones", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", category: "Wearables", description: "Fitness tracking smartwatch", image: "https://via.placeholder.com/150" },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h3>Product not found</h3>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h4>{product.category}</h4>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
