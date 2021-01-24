import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, throwError } from 'rxjs'
import { catchError, switchMap } from 'rxjs/operators'
import { CartProductInterface } from 'src/app/modules/cart/models/CartModel'
import { addToCart } from 'src/app/modules/cart/store/cart.actions'
import { CartStateInterface } from 'src/app/modules/cart/store/cart.state'
import { ProductInterface } from '../../models/interfaces'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails$: Observable<ProductInterface>
  quantity = new FormControl(1)

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<CartStateInterface>
  ) {}

  ngOnInit(): void {
    this.productDetails$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productsService.getProductDetails(params.get('slug'))
      ),
      catchError(() => {
        this.router.navigateByUrl('/page-not-found')
        return throwError('No Product Found')
      })
    )
  }

  handleAddToCard(product: CartProductInterface): void {
    this.store.dispatch(
      addToCart({
        item: {
          ...product,
          quantity: this.quantity.value,
        },
      })
    )
  }
}
