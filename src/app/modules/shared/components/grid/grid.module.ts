import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GridScrollComponent } from './grid-scroll/grid-scroll.component'
import { GridBaseComponent } from './grid-base/grid-base.component'

@NgModule({
  declarations: [GridScrollComponent, GridBaseComponent],
  exports: [GridScrollComponent, GridBaseComponent],
  imports: [CommonModule],
})
export class GridModule {}
