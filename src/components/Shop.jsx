import React, { useState, useEffect } from 'react'
import {API_KEY, API_URL} from '../config'
import Alert from './Alert';
import Cart from './Cart';
import CartList from './CartList';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  useEffect(function getGoods(){
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then(resp=>resp.json())
      .then(data=> {
        data.shop && setGoods(data.shop);
        setLoading(false)
      })
    }, [])

  const handleCloseAlert = () => {
    setAlertName('')
  }

  const handleCartShow = () => {
    setCartShow(!isCartShow)
  }

  const increaseQuantity = (itemId) => {
    let newOrder = order.map(el => {
      if(el.id === itemId) {
        let newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

  const decreaseQuantity = (itemId) => {
    let newOrder = order.map(el => {
      if(el.id === itemId) {
        let newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

  const addToCart = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
    if(itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])

    } else {
      const newOrder = order.map((orderItem, index)=> {
        if( index === itemIndex){
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem;
        }
      })
      setOrder(newOrder)
    }
    setAlertName(item.name)
    console.log(item);
  }

  const removeFromCart = (itemId) => {
    let newOrder = order.filter(el=>el.id !== itemId);
    setOrder(newOrder)
  }

  const quantity = order.reduce((sum, el) => {
    return sum + el.quantity
  }, 0)
  return (
    <main className='container content'>
    { alertName ? <Alert handleCloseAlert={handleCloseAlert} alertName={alertName}/> : ''}
    <Cart quantity={quantity} handleCartShow={handleCartShow}/>
      {
        loading ? <Preloader/> : <GoodsList goods={goods} addToCart={addToCart} />
      }
      {
        isCartShow ? <CartList order={order} handleCartShow={handleCartShow} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/> : null
      }
    </main>
  )
}

export default Shop