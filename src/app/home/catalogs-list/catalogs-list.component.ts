import { Component, OnInit } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs/internal/Observable'
import { catchError } from 'rxjs/internal/operators/catchError'
import { Catalog } from 'src/app/shared/typings/catalog'
import { CatalogsListService } from '../services/catalogs.service'

@Component({
  selector: 'app-catalogs-list',
  templateUrl: './catalogs-list.component.html',
  styleUrls: ['./catalogs-list.component.scss'],
})
export class CatalogsListComponent implements OnInit {
  catalogList$: Observable<Catalog[]>

  constructor(
    private catalogsSvc: CatalogsListService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.catalogList$ = this.catalogsSvc.getCatalogsList().pipe(
      catchError((err) => {
        this.snackBar.open(
          'Unable to get your lists. Check your internet connection and refresh page',
          'Dismiss'
        )
        return []
      })
    )
  }
}
