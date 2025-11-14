import { Provider } from 'react-redux'
import { store } from './redux/store'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { products } from './data/products'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <main>
          <ProductList products={products} />
        </main>
        <Cart />
      </div>
    </Provider>
  )
}

export default App
