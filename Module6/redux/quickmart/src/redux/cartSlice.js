import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isCartOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existingItem = state.items.find(item => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...product, quantity: 1 })
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter(item => item.id !== productId)
    },

    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload

      if (quantity <= 0) {
        state.items = state.items.filter(item => item.id !== productId)
      } else {
        const item = state.items.find(item => item.id === productId)
        if (item) {
          item.quantity = quantity
        }
      }
      
    },

    clearCart: (state) => {
      state.items = []
    },

    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen
    },

    closeCart: (state) => {
      state.isCartOpen = false
    },

    openCart: (state) => {
      state.isCartOpen = true
    }
  }
})

// Export actions
export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  closeCart,
  openCart
} = cartSlice.actions

// Selectors
export const selectCartItems = (state) => state.cart.items
export const selectIsCartOpen = (state) => state.cart.isCartOpen

export const selectCartCount = (state) => {
  return state.cart.items.reduce((count, item) => count + item.quantity, 0)
}

export const selectCartTotal = (state) => {
  return state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
}

// Export reducer
export default cartSlice.reducer
