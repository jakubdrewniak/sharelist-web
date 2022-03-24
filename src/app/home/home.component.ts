import { Component, OnDestroy } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { catchError, EMPTY, takeUntil } from 'rxjs'
import { Subject } from 'rxjs/internal/Subject'
import { NewCatalogDialogComponent } from './new-catalog-dialog/new-catalog-dialog.component'
import { CatalogsListService } from './services/catalogs.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  private unsubscribe = new Subject<void>()
  private newCatalogName: string

  constructor(
    public dialog: MatDialog,
    private catalogsSvc: CatalogsListService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnDestroy() {
    this.unsubscribe.next()
    this.unsubscribe.complete()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewCatalogDialogComponent, {
      data: { name: this.newCatalogName },
    })

    dialogRef.afterClosed().subscribe((result: string) => {
      if (!result) return
      this.newCatalogName = result
      this.addCatalog(result)
    })
  }

  private addCatalog(name: string): void {
    this.catalogsSvc
      .addNewCatalog(name)
      .pipe(
        takeUntil(this.unsubscribe),
        catchError((err) => {
          this.snackBar.open(
            'Unable to add the list. Check your internet connection and try again',
            'Dismiss'
          )
          return EMPTY
        })
      )
      .subscribe((catalogId: string) => {
        this.router.navigate([`/catalog/${catalogId}`])
      })
  }
}
