import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProductsRoutingModule } from './products-routing.module'
import { ProductCardModule } from './shared/components/product-card/product-card.module';
import { ProductDetailsComponent } from './containers/product-details/product-details.component';
import { ProductListingComponent } from './containers/product-listing/product-listing.component'

@NgModule({
  declarations: [ProductDetailsComponent, ProductListingComponent],
  imports: [CommonModule, ProductCardModule, ProductsRoutingModule],
})
export class ProductsModule {}
