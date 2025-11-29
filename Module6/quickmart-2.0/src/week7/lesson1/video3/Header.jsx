import { useState } from 'react';
import './Header.css';

function Header() {
  // Object state with multiple fields
  const [cart, setCart] = useState({
    count: 0,
    items: ['apple', 'banana']
  });

  //does not preserve existing fields
  const incrementWithoutPreserving = () => {
    setCart({ count: cart.count + 1 }); 
    console.log("Cart after incorrect update:", cart);
  };

  // uses spread operator to preserve previous state
  const incrementWithPreserve = () => {
    setCart(prev => ({
      ...prev,
      count: prev.count + 1
    }));
    console.log("Cart updated with preservation:", cart);
  };

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
                    <p>Cart Count: {cart.count}</p>
          <p>Items: {cart.items?.join(', ')}</p>
          <button onClick={incrementWithoutPreserving}>
            +
          </button>
          <button onClick={incrementWithPreserve}>
            +
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;