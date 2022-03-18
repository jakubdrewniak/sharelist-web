import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  imports: [MatButtonModule, BrowserAnimationsModule],
  exports: [MatButtonModule, BrowserAnimationsModule],
})
export class MaterialModule {}
