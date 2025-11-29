import './ProductCard.css';

function ProductCard(props) {
  const name = props.name|| "Item";
  const image = props.image? props.image : 'assets/images/default-image-icon.jpg'
  return (
    <div className={"ProductCard"}>
      <img src={image} alt={props.name} />
      <h2>{name}</h2>
      <p>₹{props.price}</p>
    </div>
  );
}


export default ProductCard;