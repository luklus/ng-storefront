import { AppComponent } from './containers/app/app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { HomeModule } from './modules/home/home.module'
import { iconCart } from './svg/icon-cart.icon'
import { iconList } from './svg/icon-list.icon'
import { NgModule } from '@angular/core'
import { ProductsModule } from './modules/products/products.module'
import { StoreModule } from '@ngrx/store'
import { SvgIconsModule } from '@ngneat/svg-icon'
import { uiReducer } from './store/app.reducer'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    ProductsModule,
    StoreModule.forRoot({ ui: uiReducer }),
    SvgIconsModule.forRoot({
      defaultSize: 'md',
      icons: [iconCart, iconList],
      sizes: {
        sm: '16px',
        md: '24px',
        lg: '32px',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
