import React from 'react'

const CartItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeFromCart = Function.prototype,
    decreaseQuantity = Function.prototype,
    increaseQuantity = Function.prototype
  } = props
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