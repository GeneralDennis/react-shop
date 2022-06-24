import React, { useEffect, useContext } from 'react'
import {API_KEY, API_URL} from '../config'
import { ShopContext } from '../context';
import Alert from './Alert';
import Cart from './Cart';
import CartList from './CartList';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
  const { setGoods, loading, isCartShow, alertName } = useContext(ShopContext);

  useEffect(function getGoods(){
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then(resp=>resp.json())
      .then(data=> {
        setGoods(data.shop)
      })
      // eslint-disable-next-line
    }, [])


  return (
    <main className='container content'>
    { alertName ? <Alert/> : ''}
    <Cart/>
      {
        loading ? <Preloader/> : <GoodsList/>
      }
      {
        isCartShow ? <CartList/> : null
      }
    </main>
  )
}

export default Shop