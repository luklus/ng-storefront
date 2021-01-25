import { CartInterface } from '../models/CartModel'
import { cartQuantitySelector, cartSelector } from '../store/cart.selectors'
import { CartStateInterface } from '../store/cart.state'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { addToCart } from '../store/cart.actions'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private store: Store<CartStateInterface>) {}

  addToCart(item): void {
    this.store.dispatch(
      addToCart({
        item,
      })
    )
  }

  getCart(): Observable<CartInterface> {
    return this.store.pipe(select(cartSelector))
  }

  getCartQuantity(): Observable<number> {
    return this.store.pipe(select(cartQuantitySelector))
  }
}
