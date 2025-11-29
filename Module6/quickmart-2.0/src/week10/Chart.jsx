function Chart() {
  const name = "Sales Data";
  const price = 120;
  
  return (
    <div className="ProductCard">
      <h2>Chart Sales</h2>
       <h2>{name}</h2>
       <h2>{price}</h2>
     </div>
  );
}

export default Chart;