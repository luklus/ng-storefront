import { CommonModule } from '@angular/common'
import { GridModule } from '../shared/components/grid/grid.module'
import { HeadModule } from '../shared/components/head/head.module'
import { HeroModule } from '../shared/components/hero/hero.module'
import { HomeComponent } from './containers/home/home.component'
import { HomeRoutingModule } from './home-routing.module'
import { NgModule } from '@angular/core'
import { ProductCardModule } from '../products/shared/components/product-card/product-card.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    GridModule,
    HeadModule,
    HeroModule,
    HomeRoutingModule,
    ProductCardModule,
  ],
})
export class HomeModule {}
