import './ProductCard.css';
import { useNavigate } from "react-router-dom";
import { memo } from "react";

function ProductCard(props) {
  const { name = "Item", image = 'assets/images/default-image-icon.jpg', price, id, onAddToCart } = props;
  const navigate = useNavigate();

  console.log("Rendering:", name); // To observe re-renders

  return (
    <div className="ProductCard">
      <img
        src={image}
        alt={name}
        onClick={() => navigate(`/product/${id}`)}
      />
      <h2>{name}</h2>
      <p>₹{price}</p>
      <button onClick={() => onAddToCart(name)} className="AddToCart">
        Add to Cart
      </button>
    </div>
  );
}

export default memo(ProductCard); // Memoize to prevent re-render unless props change
