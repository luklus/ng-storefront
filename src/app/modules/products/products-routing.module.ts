import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductDetailsComponent } from './containers/product-details/product-details.component'
import { ProductListingComponent } from './containers/product-listing/product-listing.component'

const routes: Routes = [
  { path: '', component: ProductListingComponent },
  { path: ':slug', component: ProductDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
