import './Header.css';
import SearchBar from './SearchBar';
import { NavLink, Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header>
      <h1>QuickMart</h1>
      <nav>
        <ul>
          <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          </ul>
          <ul>
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
