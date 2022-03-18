import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatRippleModule } from '@angular/material/core'

const MaterialModules = [
  MatButtonModule,
  BrowserAnimationsModule,
  MatListModule,
  MatIconModule,
  MatRippleModule,
]

@NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules],
})
export class MaterialModule {}
