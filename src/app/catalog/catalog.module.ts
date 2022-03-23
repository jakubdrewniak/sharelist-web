import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CatalogComponent } from './catalog.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
})
export class CatalogModule {}
