// Presentation Component for displaying a single product item
const ProductItem = ({ product }) => (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <a href={product.request.url}>Know More</a>
    </div>
  );

  export default ProductItem;