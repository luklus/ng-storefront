import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProductsRoutingModule } from './products-routing.module'
import { ProductCardModule } from './shared/components/product-card/product-card.module'
import { ProductDetailsComponent } from './containers/product-details/product-details.component'
import { ProductListingComponent } from './containers/product-listing/product-listing.component'
import { ButtonModule } from '../shared/components/button/button.module'
import { GridModule } from '../shared/components/grid/grid.module'

@NgModule({
  declarations: [ProductDetailsComponent, ProductListingComponent],
  imports: [
    ButtonModule,
    CommonModule,
    GridModule,
    ProductCardModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule {}
