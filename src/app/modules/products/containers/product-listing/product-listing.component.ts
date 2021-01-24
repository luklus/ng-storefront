import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductListingInterface } from '../../models/interfaces'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  productListing$: Observable<ProductListingInterface>

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productListing$ = this.productsService.getProductListing()
  }
}
