import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QuantityComponent } from './quantity.component'
import { ButtonModule } from 'src/app/modules/shared/components/button/button.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [QuantityComponent],
  exports: [QuantityComponent],
  imports: [ButtonModule, CommonModule, ReactiveFormsModule],
})
export class QuantityModule {}
