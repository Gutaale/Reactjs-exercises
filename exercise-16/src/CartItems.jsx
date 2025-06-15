import React, {useContext} from 'react'
import CartContext from './CartContext'

const CartItems = ({ id, name, price }) => {
  
    const { addToCart } = useContext(CartContext)
    const haddleAddToCart = () => {
        const item = {
            id,
            name,
            price
        }
        addToCart(item)
    }


  return (
    <div>
        <p>{name}</p>
        <p>${price.toFixed(2)}</p>
        <button onClick={haddleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default CartItems