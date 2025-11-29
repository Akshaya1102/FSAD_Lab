import { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import Login from './Login';

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
      <ProductList incrementCart={incrementCart} searchTerm={searchTerm}/>
      {/* <Login/> */}
    </div>
  )
}

export default App
