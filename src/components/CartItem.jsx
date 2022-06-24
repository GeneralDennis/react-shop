import React, { useContext } from 'react'
import { ShopContext } from '../context'

const CartItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
  } = props

  const {removeFromCart, decreaseQuantity, increaseQuantity} = useContext(ShopContext)

  return (
    <li className='collection-item'>{
      name} x <span className='material-icons cart__quantity' onClick={() => decreaseQuantity(id)}>remove</span> {quantity} <span className='material-icons cart__quantity' onClick={() => increaseQuantity(id)}>add</span> = {price * quantity}  руб.
      <span className='secondary-content close' onClick={() => removeFromCart(id)}>
        <i className='material-icons'>clear</i>
      </span>
    </li>
  )
}
export default CartItem