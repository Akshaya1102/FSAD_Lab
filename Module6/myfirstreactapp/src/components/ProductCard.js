/* Lab 6.2 A reusable ProductCard component*/
import { useState, useEffect } from "react";

function ProductCard(props) {
  const [likes, setLikes] = useState(0);

  // Log whenever likes change
  useEffect(() => {
    console.log(`${props.name} has ${likes} likes now`);
  }, [likes, props.name]);

  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        width: "250px",
        textAlign: "center",
        margin: "1rem",
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "100px", height: "100px" }}
      />
      <h2>{props.name}</h2>
      <h4>{props.category}</h4>
      <p>{props.description}</p>

      {/* Like button and display */}
      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <p>Likes: {likes}</p>
      <p>{likes > 5 ? "This product is popular!" : "Give this product a like!"}</p>
    </div>
  );
}

export default ProductCard;


/* Lab 6.1 A reusable ProductCard component
function ProductCard(props) {
  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        width: "250px",
        textAlign: "center",
        margin: "1rem",
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "100px", height: "100px" }}
      />
      <h2>{props.name}</h2>
      <h4>{props.category}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default ProductCard;*/
