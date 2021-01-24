import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { CartRoutingModule } from './cart-routing.module'
import { CartComponent } from './containers/cart/cart.component'
import { cartFeatureKey } from './store/cart.state'
import { cartReducer } from './store/cart.reducers'
import { ProductCardModule } from '../products/shared/components/product-card/product-card.module'

@NgModule({
  declarations: [CartComponent],
  imports: [
    ProductCardModule,
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature(cartFeatureKey, cartReducer),
  ],
})
export class CartModule {}
