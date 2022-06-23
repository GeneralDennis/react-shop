import React from 'react'
import CartItem from './CartItem';

const CartList = (props) => {
  const { order, handleCartShow = Function.prototype, removeFromCart, decreaseQuantity, increaseQuantity} = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)
  return (
    <ul className='collection cart__list'>
      <li className='collection-item active'>Корзина<span className='secondary-content close' onClick={handleCartShow}>
        <i className='material-icons'>clear</i>
      </span></li>
      {
        order.length ?
        order.map(item => (
          <CartItem
            key={item.id}
            {...item}
            removeFromCart={removeFromCart}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}/>
        ))
        : <li className='collection-item'>Корзина пуста</li>
      }
      <li className='collection-item active'>Общая стоимость: {totalPrice} руб.</li>
      <li className='collection-item active'><button className='btn btn-small'>Оформить</button></li>

    </ul>
  )
}
export default CartList