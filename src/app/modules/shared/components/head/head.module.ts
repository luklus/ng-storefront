import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeadComponent } from './head.component'

@NgModule({
  declarations: [HeadComponent],
  exports: [HeadComponent],
  imports: [CommonModule],
})
export class HeadModule {}
