import React,{ useContext } from 'react'
import CartContext from './CartContext'

const CartSummary = () => {
    const {cart , removeCartItem} = useContext(CartContext)
    const haddleRemoveItem = (index) => {
        removeCartItem(index)
    }

  return (
    <div>
        <h2>Cart Summary</h2>
        {cart.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price.toFixed(2)}
                        <button onClick={() => haddleRemoveItem(item.id)}>Remove</button>
                    </li>   
                ))}
            </ul>
        )}
    </div>

  )
}

export default CartSummary