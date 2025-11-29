import './Header.css';

function Header(){
  let cartCount = 0;
  function incrementCart(){
      cartCount += 1;
      console.log("cartCount: ",cartCount);
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
