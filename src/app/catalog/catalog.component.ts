import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router'
import { Socket } from 'ngx-socket-io'
import { Subscription } from 'rxjs'
import { Observable } from 'rxjs/internal/Observable'
import { Catalog, Product } from '../shared/typings/catalog'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  newCatalogItem: Product
  catalog$: Observable<Catalog>
  subscription: Subscription
  catalogID: string | null

  @ViewChild('nameInput') nameInput: ElementRef

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socket: Socket,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.resetNewCatalogItem()
    this.catalogID = this.route.snapshot.paramMap.get('id')
    this.catalog$ = this.socket.fromEvent<Catalog>('catalog')

    this.joinRoom()
  }

  addNewItem(products: Product[] = []) {
    if (!this.newCatalogItem?.name) return

    const updatedProducts = [...products, { ...this.newCatalogItem }]

    this.socket.emit(
      'updateProducts',
      { _id: this.catalogID, products: updatedProducts },
      (err: unknown) => {
        if (err)
          return this.snackBar.open('There has been problem in updating list')
        return this.resetNewCatalogItem()
      }
    )
  }

  private resetNewCatalogItem(): void {
    this.newCatalogItem = {
      name: '',
    }
    this.nameInput?.nativeElement.focus()
  }

  private joinRoom(): void {
    this.socket.emit('join', { _id: this.catalogID }, (err: unknown) => {
      if (err) {
        this.snackBar.open(
          'Unable to get this list. Check your internet connection and try again'
        )
        this.router.navigate(['/'])
      }
    })
  }
}
