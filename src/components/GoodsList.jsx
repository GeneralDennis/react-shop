import React from 'react'
import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
  const { goods = [], addToCart = Function.prototype} = props;
  return (
    <div className='goods'>
      { goods.length ?
        goods.map(item => (
          <GoodsItem goods={item} key={item.mainId} addToCart={addToCart}/>
        ))
        :
        <h3>Nothing to show</h3>
      }
    </div>
  )
}
export default GoodsList