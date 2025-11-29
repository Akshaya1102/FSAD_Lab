import React from 'react';
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  return (
    <div>Here are product details for product with id: {id}</div>
  )
}

export default ProductDetails