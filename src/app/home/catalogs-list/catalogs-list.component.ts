import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'
import { Catalog, CatalogsListService } from '../services/catalogs.service'

@Component({
  selector: 'app-catalogs-list',
  templateUrl: './catalogs-list.component.html',
  styleUrls: ['./catalogs-list.component.scss'],
})
export class CatalogsListComponent implements OnInit {
  catalogList$: Observable<Catalog[]>

  constructor(private catalogsSvc: CatalogsListService) {}

  ngOnInit() {
    this.catalogList$ = this.catalogsSvc.getCatalogsList()
  }
}
