import { createAction, props } from '@ngrx/store'
import { CartProductInterface } from '../models/CartModel'

export const getCart = createAction('[Cart] Get Cart')

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ item: CartProductInterface }>()
)
