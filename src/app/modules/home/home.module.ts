import { HeroModule } from '../shared/components/hero/hero.module'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './containers/home/home.component'
import { HomeRoutingModule } from './home-routing.module'
import { NgModule } from '@angular/core'
import { HeadModule } from '../shared/components/head/head.module'
import { GridModule } from '../shared/components/grid/grid.module'
import { ProductCardModule } from '../products/shared/components/product-card/product-card.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    GridModule,
    HeadModule,
    HeroModule,
    CommonModule,
    HomeRoutingModule,
    ProductCardModule,
  ],
})
export class HomeModule {}
