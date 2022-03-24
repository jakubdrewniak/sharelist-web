import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CatalogComponent } from './catalog.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { SharedModule } from '../shared/shared.module'
import { ProductsListComponent } from './products-list/products-list.component'
import { ProductFormComponent } from './product-form/product-form.component'
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component'

@NgModule({
  declarations: [
    CatalogComponent,
    ProductFormComponent,
    ProductsListComponent,
    EditProductDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CatalogModule {}
