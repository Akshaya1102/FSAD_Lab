import './ProductCard.css';

function ProductCardFunctionalComponent() {
  const name = "Fresh Apples";
  const price = 120;
  
  return (
    <div className="ProductCard">
      <h2>Functional Component</h2>
      <img src="/assets/images/apple.jpg" alt={name} />
      <h2>{name}</h2>
      <p>₹{price}/kg</p>
    </div>
  );
}

export default ProductCardFunctionalComponent;
