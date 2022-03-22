import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { NewCatalogDialogData } from 'src/app/shared/typings/new-catalog-dialog-data'

@Component({
  selector: 'app-new-catalog-dialog',
  templateUrl: './new-catalog-dialog.component.html',
  styleUrls: ['./new-catalog-dialog.component.scss'],
})
export class NewCatalogDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NewCatalogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewCatalogDialogData
  ) {}

  cancel(): void {
    this.dialogRef.close()
  }
}
