import { Component, OnDestroy, OnInit } from '@angular/core'
import { Socket } from 'ngx-socket-io'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sharelist-web'
  callbackMessage = ''
  messageFromServer = ''
  subscription: Subscription

  constructor(private socket: Socket) {}

  ngOnInit() {
   this.subscription = this.socket
      .fromEvent<{ msg: string }>('message')
      .subscribe((data: { msg: string }) => {
        this.messageFromServer = data.msg
      })

    this.socket.emit(
      'join',
      { msg: 'This is first message from client!' },
      () => {
        this.callbackMessage = 'Callback succeeded!'
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
