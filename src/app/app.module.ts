import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io'
import { BrowserModule } from '@angular/platform-browser'

const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} }

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
