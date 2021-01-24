import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { CartInterface } from '../../models/CartModel'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart$: Observable<CartInterface>
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart$ = this.cartService.getCart()
  }
}
