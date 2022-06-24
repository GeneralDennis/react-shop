import React, { useEffect, useContext } from 'react'
import { ShopContext } from '../context'

const Alert = () => {
  const { alertName = '', handleCloseAlert = Function.prototype } = useContext(ShopContext);

  useEffect(() => {
    const timerID = setTimeout(handleCloseAlert, 2000)
    return () => {
      clearTimeout(timerID)
    }
  // eslint-disable-next-line
  }, [alertName])
  return (
    <div id='toast-container'>
      <div className='toast'>"{alertName}" добавлен в корзину</div>
    </div>
  )
}
export default Alert