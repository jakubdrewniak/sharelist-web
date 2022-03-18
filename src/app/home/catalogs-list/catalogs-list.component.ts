import { Component, OnInit } from '@angular/core'

type Catalog = {
  name: string
}

@Component({
  selector: 'app-catalogs-list',
  templateUrl: './catalogs-list.component.html',
  styleUrls: ['./catalogs-list.component.scss'],
})
export class CatalogsListComponent {
  catalogList: Catalog[] = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
  ]
}
