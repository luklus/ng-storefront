import { HeroModule } from '../shared/hero/hero.module'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './containers/home/home.component'
import { HomeRoutingModule } from './home-routing.module'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [HomeComponent],
  imports: [HeroModule, CommonModule, HomeRoutingModule],
})
export class HomeModule {}
