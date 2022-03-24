import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MaterialModule } from 'src/app/material.module'

import { ProductsListComponent } from './products-list.component'

describe('ProductsListComponent', () => {
  let component: ProductsListComponent
  let fixture: ComponentFixture<ProductsListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [MaterialModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
