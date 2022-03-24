import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core'
import { Product } from 'src/app/shared/typings/catalog'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  newCatalogItem: Product = {
    name: '',
  }

  @Output() submitProduct: EventEmitter<void> = new EventEmitter<void>()
  @ViewChild('nameInput') nameInput: ElementRef

  submitForm() {
    this.submitProduct.emit()
  }
}
