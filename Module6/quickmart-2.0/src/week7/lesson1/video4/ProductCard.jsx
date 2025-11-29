import './ProductCard.css';

function ProductCard(props) {
  const name = props.name || "Item";
  const image = props.image? props.image : 'assets/images/default-image-icon.jpg'
  return (
    <div className={"ProductCard"}>
      <img src={image} alt={props.name} />
      <h2>{name}</h2>
      <p>₹{props.price}</p>
      <button onClick={props.incrementCart} className="AddToCart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;