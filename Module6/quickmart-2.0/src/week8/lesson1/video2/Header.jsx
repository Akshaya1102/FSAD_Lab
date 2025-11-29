import './Header.css';
import SearchBar from './SearchBar'
function Header({cartCount,setSearchTerm}){
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
        <SearchBar setSearchTerm={setSearchTerm}/>
        <div className="cart">
          <img id="cart-icon" src="../assets/images/cart-icon.jpg" alt="" />
          <span id="cart-count">{cartCount}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
