import React, { useEffect } from 'react'

const Alert = ( props ) => {
  const { alertName = '', handleCloseAlert = Function.prototype } = props;

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