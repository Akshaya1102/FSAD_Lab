import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import Login from './Login';
import Error from './Error';
import ProductDetails from './ProductDetails';
// routing
import { Routes, Route } from "react-router-dom";
// cart
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Routes>
         <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </CartProvider>
  )
}

export default App;