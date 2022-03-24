import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Product } from 'src/app/shared/typings/catalog'
import { ProductFormComponent } from '../product-form/product-form.component'

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss'],
})
export class EditProductDialogComponent implements AfterViewInit {
  @ViewChild(ProductFormComponent) productForm: ProductFormComponent

  constructor(
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.productForm.newCatalogItem = this.data
    })
  }

  cancel(): void {
    this.dialogRef.close()
  }
}
