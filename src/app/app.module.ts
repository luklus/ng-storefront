import { AppComponent } from './containers/app/app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { HomeModule } from './modules/home/home.module'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
