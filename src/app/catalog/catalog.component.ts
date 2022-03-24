import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router'
import { Socket } from 'ngx-socket-io'
import { Subject, Subscription, takeUntil } from 'rxjs'
import { Catalog, Product } from '../shared/typings/catalog'
import { NewProductFormComponent } from './new-product-form/new-product-form.component'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, OnDestroy {
  catalog: Catalog
  subscription: Subscription
  catalogID: string | null
  private unsubscribe = new Subject<void>()

  @ViewChild(NewProductFormComponent) productForm: NewProductFormComponent

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socket: Socket,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
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

  addNewItem(newProduct: Product) {
    if (!newProduct?.name) return

    const updatedProducts = [
      { ...newProduct, completed: false },
      ...(this.catalog?.products || []),
    ]

    this.socket.emit(
      'updateProducts',
      { _id: this.catalogID, products: updatedProducts },
      (err: unknown) => {
        if (err)
          return this.snackBar.open('There has been problem in updating list')
        return this.productForm?.resetNewProduct()
      }
    )
  }

  toggleCompleted(index: number): void {
    const updatedProducts = JSON.parse(JSON.stringify(this.catalog.products))
    updatedProducts[index].completed = !updatedProducts[index].completed

    this.socket.emit(
      'updateProducts',
      { _id: this.catalogID, products: updatedProducts },
      () => {}
    )
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
