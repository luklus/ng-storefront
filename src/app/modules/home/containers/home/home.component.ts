import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductListingInterface } from 'src/app/modules/products/models/interfaces'
import { ProductsService } from 'src/app/modules/products/services/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productListing$: Observable<ProductListingInterface>

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productListing$ = this.productsService.getProductListing()
  }
}
