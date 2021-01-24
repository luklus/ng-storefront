import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CartInterface } from '../models/CartModel'
import { cartFeatureKey, CartStateInterface } from './cart.state'

const cartSelector = createFeatureSelector<CartStateInterface, CartInterface>(
  cartFeatureKey
)

const cartQuantitySelector = createSelector(
  cartSelector,
  (cart: CartInterface) => cart.itemList.length
)

export { cartSelector, cartQuantitySelector }
