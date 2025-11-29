import { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import Login from './Login';
import Error from './Error';
import ProductDetails from './ProductDetails';

// routing
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [cartCount,setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  function incrementCart(){
      const newCartCount = cartCount + 1;
      setCartCount(newCartCount);
      console.log("cartCount: ",newCartCount);
  }
  return (
    <div className="App">
     <Header cartCount={cartCount} setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path="/" element={<ProductList incrementCart={incrementCart} searchTerm={searchTerm}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
