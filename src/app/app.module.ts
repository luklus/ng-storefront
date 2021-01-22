import { AppComponent } from './containers/app/app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { HomeModule } from './modules/home/home.module'
import { NgModule } from '@angular/core'
import { ProductsModule } from './modules/products/products.module'
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    ProductsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
