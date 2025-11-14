import { useDispatch, useSelector } from 'react-redux'
import { toggleCart, selectCartCount } from '../redux/cartSlice'
import './Header.css'

function Header() {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)

  const handleToggleCart = () => {
    dispatch(toggleCart())
  }

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">QuickMart</h1>
        <nav className="nav">
          <button className="cart-button" onClick={handleToggleCart}>
            Cart ({cartCount})
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
