import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { CartService } from 'src/app/modules/cart/services/cart.service'
import { cartQuantitySelector } from 'src/app/modules/cart/store/cart.selectors'
import { CartStateInterface } from 'src/app/modules/cart/store/cart.state'
import { uiNameSelector } from 'src/app/store/app.selectors'
// import { AppStateInterface } from 'src/app/store/app.state'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name$: Observable<string>
  quantity$: Observable<number>

  constructor(
    private cartService: CartService,
    private store: Store<CartStateInterface>
  ) {}

  ngOnInit(): void {
    this.name$ = this.store.pipe(select(uiNameSelector))
    this.quantity$ = this.cartService.getCartQuantity()
  }
}
