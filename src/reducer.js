const reducer = (state, {type, payload}) => {
  switch(type){
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false
      }
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartShow: !state.isCartShow
      }
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map(el => {
          if(el.id === payload.id) {
            let newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity
            }
          } else {
            return el
          }
      })
    }

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map(el => {
          if(el.id === payload.id) {
            let newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0
            }
          } else {
            return el
          }
        })
      }
    case 'ADD_TO_CART': {
      const itemIndex = state.order.findIndex(
        oredrItem => oredrItem.id === payload.id
      )
      let newOrder = null;
      if(itemIndex < 0 ) {
        const newItem = {
          ...payload,
          quantity: 1
        }
        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((orderItem, index)=> {
          if( index === itemIndex){
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1
            }
          } else {
            return orderItem;
          }
        })

      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name
      }
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        order: state.order.filter(el => el.id !== payload.id)
    }
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: ''
      }
    default:
      return state
  }
}

export default reducer