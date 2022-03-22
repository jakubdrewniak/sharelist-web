import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { NewCatalogDialogComponent } from './new-catalog-dialog/new-catalog-dialog.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewCatalogDialogComponent, {
      data: { name: '' },
    })

    dialogRef.afterClosed().subscribe((result: string) => {
      this.addCatalog(result)
    })
  }

  private addCatalog(name: string): void {}
}
