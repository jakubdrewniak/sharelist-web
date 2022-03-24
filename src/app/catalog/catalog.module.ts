import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CatalogComponent } from './catalog.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { SharedModule } from '../shared/shared.module'
import { NewProductFormComponent } from './new-product-form/new-product-form.component'

@NgModule({
  declarations: [CatalogComponent, NewProductFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CatalogModule {}
