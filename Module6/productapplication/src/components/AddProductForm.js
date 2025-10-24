import React, { useState} from 'react';
// Container Component for adding a new product
const AddProductForm = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newProduct = { name, price };
      try {
        const response = await fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        });
        const data = await response.json();
        onAddProduct(data.createdProduct);
        setName('');
        setPrice('');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br/>
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <br/>
        <button type="submit">Add Product</button>
      </form>
    );
  };

export default AddProductForm;
  