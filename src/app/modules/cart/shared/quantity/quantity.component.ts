import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Subscription } from 'rxjs'
import { startWith } from 'rxjs/operators'

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent implements OnDestroy, OnInit {
  private subscription: Subscription
  @Input() quantityControl: FormControl

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.quantityControl.valueChanges
      .pipe(startWith(this.quantityControl.value))
      .subscribe(value => {
        this.quantityControl.setValue(this.handleValue(value), {
          emitEvent: false,
        })
      })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  handleDecrement(): void {
    this.quantityControl.setValue(this.quantityControl.value - 1)
    this.quantityControl.markAsDirty()
  }

  handleIncrement(): void {
    this.quantityControl.setValue(this.quantityControl.value + 1)
    this.quantityControl.markAsDirty()
  }

  handleValue(value: number): number {
    if (value < 1) {
      value = 1
    }

    return value
  }
}
