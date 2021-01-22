import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { ProductListingInterface } from '../../models/interfaces'
import { ProductListingMockup } from '../../models/mockups'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProductListing(): Observable<ProductListingInterface> {
    return of(ProductListingMockup)
  }
}
