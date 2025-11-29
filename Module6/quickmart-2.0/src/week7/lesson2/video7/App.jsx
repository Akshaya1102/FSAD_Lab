//import { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import Login from './Login';

function App() {
  {/*
  let [cartCount,setCartCount] = useState(0);
  function incrementCart(){
      const newCartCount = cartCount + 1;
      setCartCount(newCartCount);
      console.log("cartCount: ",newCartCount);
  }
  */}
  return (
    <div className="App">
      {/*
      <Header cartCount={cartCount}/>
      <ProductList incrementCart={incrementCart}/>
      */ }
      <Login/>
    </div>
  )
}

export default App
