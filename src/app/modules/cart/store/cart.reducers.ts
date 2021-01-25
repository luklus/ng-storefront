import { CartInterface } from '../models/CartModel'
import { createReducer, on } from '@ngrx/store'
import { addToCart, getCart } from './cart.actions'

const initialState: CartInterface = {
  id: '10',
  itemList: [{ id: '0001', name: 'Product 1', quantity: 1, slug: 'product1' }],
}

const cartReducer = createReducer(
  initialState,

  on(getCart, state => state),

  on(addToCart, (state, { item }) => {
    const isItemInCart = state.itemList.find(
      itemCart => itemCart.id === item.id
    )

    if (isItemInCart) {
      const itemList = state.itemList.map(itemCart => {
        if (itemCart.id === item.id) {
          return {
            ...itemCart,
            quantity: itemCart.quantity + item.quantity,
          }
        }
        return item
      })

      return {
        ...state,
        itemList,
      }
    }

    return {
      ...state,
      itemList: [...state.itemList, item],
    }
  })
)

export { cartReducer }
