import './ProductCard.css';
import { useNavigate } from "react-router-dom";
import { useCart } from './context/CartContext';

function ProductCard(props) {
  const name = props.name || "Item";
  const image = props.image? props.image : 'assets/images/default-image-icon.jpg';
  const navigate = useNavigate();
  const { incrementCart } = useCart();

  return (
    <div className={"ProductCard"}>
      <img src={image} alt={props.name} onClick={ () => navigate(`/product/${props.id}`)} />
      <h2>{name}</h2>
      <p>₹{props.price}</p>
      <button onClick={incrementCart} className="AddToCart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;