import './ProductCard.css';
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const name = props.name || "Item";
  const image = props.image? props.image : 'assets/images/default-image-icon.jpg';
  const navigate = useNavigate();

  return (
    <div className={"ProductCard"}>
      <img src={image} alt={props.name} onClick={ () => navigate(`/product/${props.id}`)} />
      <h2>{name}</h2>
      <p>₹{props.price}</p>
      <button onClick={props.incrementCart} className="AddToCart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;