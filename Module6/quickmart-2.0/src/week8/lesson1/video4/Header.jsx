import './Header.css';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header>
      <h1>QuickMart</h1>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/?category=fruits">Fruits</Link></li>
          <li><Link to="/?category=vegetables">Vegetables</Link></li>
          <li><Link to="/?category=dairy">Dairy</Link></li>
          <li><Link to="/?category=bakery">Bakery</Link></li>
        </ul>

        <SearchBar />

        <div className="cart">
          <img id="cart-icon" src="/assets/images/cart-icon.jpg" alt="Cart Icon" />
          <span id="cart-count">{cartCount}</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
