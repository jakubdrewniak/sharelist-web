import { Component, OnInit } from '@angular/core'
import { Socket } from 'ngx-socket-io'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sharelist-web'
  callbackMessage = ''
  messageFromServer = ''
  constructor(private socket: Socket) {}

  ngOnInit() {
    this.socket
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
}
