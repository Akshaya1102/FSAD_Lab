import { useState } from 'react';
import './Header.css';

function Header(){
  let [cartCount,setCartCount] = useState(0);
  function incrementCart(){
      const newCartCount = cartCount + 1;
      setCartCount(newCartCount);
      console.log("cartCount: ",newCartCount);
  }
  return (
    <header>
      <h1>QuickMart</h1>
      <nav>
        <ul>
          <li><a href="#">Fruits</a></li>
          <li><a href="#">Vegetables</a></li>
          <li><a href="#">Dairy</a></li>
          <li><a href="#">Bakery</a></li>
        </ul>
        <div className="cart">
          <img id="cart-icon" src="../assets/images/cart-icon.jpg" alt="" />
          <span id="cart-count">{cartCount}</span>
          <button onClick={incrementCart} className="incrementCart">+</button>    
          {/* infintite loop 
          <button onClick={incrementCart()} className="incrementCart">+</button>    
          */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
