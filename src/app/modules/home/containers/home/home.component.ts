import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductListingInterface } from 'src/app/modules/products/models/interfaces'
import { ProductService } from 'src/app/modules/products/shared/services/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productListing$: Observable<ProductListingInterface>

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productListing$ = this.productService.getProductListing()
  }
}
