import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from 'src/app/shared/typings/catalog'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: Product[]
  @Output() toggleCompleted: EventEmitter<number> = new EventEmitter<number>()
  @Output() deleteProduct: EventEmitter<number> = new EventEmitter<number>()
  @Output() editProduct: EventEmitter<number> = new EventEmitter<number>()

  itemCheckToggle(index: number): void {
    this.toggleCompleted.emit(index)
  }

  deleteItem(index: number): void {
    this.deleteProduct.emit(index)
  }

  editItem(index: number): void {
    this.editProduct.emit(index)
  }
}
