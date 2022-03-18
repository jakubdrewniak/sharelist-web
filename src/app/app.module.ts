import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io'
import { BrowserModule } from '@angular/platform-browser'
import { CatalogModule } from './catalog/catalog.module'
import { HomeModule } from './home/home.module'
import { AppRoutingModule } from './app-routing.module'

const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} }

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    CatalogModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
