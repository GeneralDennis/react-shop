import React, { useContext } from 'react'
import { ShopContext } from '../context'
import GoodsItem from './GoodsItem';

const GoodsList = () => {
  const { goods = []} = useContext(ShopContext)
  return (
    <div className='goods'>
      { goods.length ?
        goods.map(item => (
          <GoodsItem goods={item} key={item.mainId}/>
        ))
        :
        <h3>Nothing to show</h3>
      }
    </div>
  )
}
export default GoodsList