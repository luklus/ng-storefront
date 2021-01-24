import { Injectable } from '@angular/core'
import { from, Observable, of } from 'rxjs'
import { first } from 'rxjs/operators'
import { ProductInterface, ProductListingInterface } from '../models/interfaces'
import { ProductListingMockup } from '../models/mockups'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProductDetails(slug: string): Observable<ProductInterface> {
    return from([...ProductListingMockup.list]).pipe(
      first(productDetails => productDetails.slug === slug)
    )
  }

  getProductListing(): Observable<ProductListingInterface> {
    return of(ProductListingMockup)
  }
}
