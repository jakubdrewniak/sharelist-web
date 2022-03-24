import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { Product } from 'src/app/shared/typings/catalog'

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.scss'],
})
export class NewProductFormComponent implements OnInit {
  newCatalogItem: Product

  @Output() newProduct: EventEmitter<Product> = new EventEmitter<Product>()
  @ViewChild('nameInput') nameInput: ElementRef

  ngOnInit(): void {
    this.resetNewProduct()
  }

  submitProduct() {
    this.newProduct.emit(this.newCatalogItem)
  }

  resetNewProduct(): void {
    this.newCatalogItem = {
      name: '',
    }
    this.nameInput?.nativeElement.focus()
  }
}
