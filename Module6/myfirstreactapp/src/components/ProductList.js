import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {/* Add multiple ProductCard components */}
      <ProductCard
        name="Laptop"
        category="Electronics"
        description="High-performance laptop for everyday use."
        image="https://placehold.co/100x100"
      />
      <ProductCard
        name="Headphones"
        category="Accessories"
        description="Noise-cancelling over-ear headphones."
         image="https://placehold.co/100x100"
      />
      <ProductCard
        name="Smartwatch"
        category="Wearables"
        description="Track fitness and notifications on the go."
         image="https://placehold.co/100x100"
      />
    </div>
  );
}

export default ProductList;
