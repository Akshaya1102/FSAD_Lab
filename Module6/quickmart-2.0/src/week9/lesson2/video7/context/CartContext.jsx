import { createContext, useContext, useState } from "react";

// 1. Create the Context
const CartContext = createContext();

// 2. Create the Provider
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, incrementCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook for easy access
export const useCart = () => useContext(CartContext);
