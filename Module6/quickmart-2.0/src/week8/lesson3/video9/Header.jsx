import './Header.css';
import SearchBar from './SearchBar'

import { Link } from "react-router-dom";
import { useCart } from './context/CartContext';

function Header(){
  const { cartCount } = useCart();
  return (
    <header>
      <h1>QuickMart</h1>
      <nav>
        <ul>
          <Link to="/login">Login</Link>
          <Link to="/">Home</Link>
        </ul>
        <SearchBar />
        <div className="cart">
          <img id="cart-icon" src="../assets/images/cart-icon.jpg" alt="" />
          <span id="cart-count">{cartCount}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
