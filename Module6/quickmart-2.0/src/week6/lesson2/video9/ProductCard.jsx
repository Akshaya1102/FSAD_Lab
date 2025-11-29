import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className={"ProductCard"}>
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>₹{props.price}</p>
    </div>
  );
}

export default ProductCard;