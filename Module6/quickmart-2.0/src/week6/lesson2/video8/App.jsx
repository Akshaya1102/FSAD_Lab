import './App.css';
import Login from './Login';
import ProductCardFunctionalComponent from './ProductCardFunctionalComponent';

function App() {
  const isLogged = false;
  return (
    <div className="App">
      {isLogged? <ProductCardFunctionalComponent/> : <Login/>}
    </div>
  )
}


export default App
