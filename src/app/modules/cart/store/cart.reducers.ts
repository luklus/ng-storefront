import { CartInterface } from '../models/CartModel'
import { createReducer, on } from '@ngrx/store'
import { addToCart, getCart } from './cart.actions'

const initialState: CartInterface = {
  id: '10',
  itemList: [{ id: '1', name: 'Product 1', quantity: 1, slug: 'product1' }],
}

const cartReducer = createReducer(
  initialState,

  on(getCart, state => state),

  on(addToCart, (state, { item }) => ({
    ...state,
    itemList: [...state.itemList, item],
  }))
)

export { cartReducer }
