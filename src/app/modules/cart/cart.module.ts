import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { CartRoutingModule } from './cart-routing.module'
import { CartComponent } from './containers/cart/cart.component'
import { cartFeatureKey } from './store/cart.state'
import { cartReducer } from './store/cart.reducers'

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature(cartFeatureKey, cartReducer),
  ],
})
export class CartModule {}
