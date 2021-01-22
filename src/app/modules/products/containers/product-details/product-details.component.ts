import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { Observable, throwError } from 'rxjs'
import { catchError, switchMap } from 'rxjs/operators'
import { ProductInterface } from '../../models/interfaces'
import { ProductsService } from '../../shared/services/products.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails$: Observable<ProductInterface>

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
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
}
