import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router'
import { Socket } from 'ngx-socket-io'
import { Subject, Subscription, takeUntil } from 'rxjs'
import { Catalog, Product } from '../shared/typings/catalog'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, OnDestroy {
  newCatalogItem: Product
  catalog: Catalog
  subscription: Subscription
  catalogID: string | null
  private unsubscribe = new Subject<void>()

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

    this.socket
      .fromEvent<Catalog>('catalog')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((catalog: Catalog) => (this.catalog = catalog))

    this.joinRoom()
  }

  ngOnDestroy() {
    this.unsubscribe.next()
    this.unsubscribe.complete()
  }

  addNewItem(products: Product[] = []) {
    if (!this.newCatalogItem?.name) return

    const updatedProducts = [
      { ...this.newCatalogItem, completed: false },
      ...products,
    ]

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

  itemCheckToggle(products: Product[] | undefined, index: number): void {
    if (!products) return
    const updatedProducts = JSON.parse(JSON.stringify(products))
    updatedProducts[index].completed = !updatedProducts[index].completed

    this.socket.emit(
      'updateProducts',
      { _id: this.catalogID, products: updatedProducts },
      () => {}
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
