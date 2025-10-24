// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProductsPage from './components/ProductsPage';

function App() {
  const [token, setToken] = useState(null);
  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/products" element={<ProductsPage token={token}/>} />
          {/* Add more routes for other pages if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

