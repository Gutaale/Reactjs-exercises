import { useState } from 'react'
import CartContext from './CartContext'
import CartItems from './CartItems'
import CartSummary from './CartSummary'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }
  const removeCartItem = (index) => {
    setCart(cart.filter((item) => item.id !== index));
  }
 const value={cart, addToCart, removeCartItem}
  return (
    <CartContext.Provider value={value}>
     
        <h1>Shopping Cart</h1>
        <CartItems id={1} name="Widget" price={19.99}/>
        <CartItems id={2} name="Gadget" price={29.99}/>
        <CartSummary />
      
    </CartContext.Provider>
  )

  return (
    <>
    </>

  )
}

export default App
