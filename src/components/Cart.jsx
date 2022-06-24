import React, { useContext } from 'react'
import { ShopContext } from '../context'

const Cart = () => {
  const { order, handleCartShow = Function.prototype} = useContext(ShopContext);

  let quantity = order.reduce((sum, el) => {
    return sum + el.quantity
  }, 0)
  return (
    <div className='cart blue darken-4 white-text' onClick={handleCartShow}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart__quantity'>{quantity}</span> : null }
    </div>
  )
}
export default Cart