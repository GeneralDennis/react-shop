import React from 'react'

const GoodsItem = (props) => {
  const { mainId: id, displayName: name, displayDescription: description, price: itemPrice , displayAssets} = props.goods;
  const { addToCart = Function.prototype } = props;
  let regPrice = itemPrice.regularPrice;
  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={name}/>
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button className='btn' onClick={() => addToCart({id, name, price: regPrice})}>Купить</button>
        <span className='right' style={{fontSize: '1.8rem'}}>{regPrice} руб.</span>
      </div>
    </div>
  )
}

export default  GoodsItem