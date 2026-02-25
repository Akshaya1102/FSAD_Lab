import React from 'react';
import './App.css';
import ToggleButton from './components/Toggle';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FindUser from './components/FindUser';
import ProductList from './components/ProductList';
function App() {
    let isLogged=true;
    return (
     
    <div>
        <h1>Product Listing</h1>
        <ProductList />
      </div>
        
    
  );
}

export default App;
