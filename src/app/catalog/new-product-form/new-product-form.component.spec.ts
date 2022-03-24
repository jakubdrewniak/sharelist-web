import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/material.module'

import { NewProductFormComponent } from './new-product-form.component'

describe('NewProductFormComponent', () => {
  let component: NewProductFormComponent
  let fixture: ComponentFixture<NewProductFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductFormComponent],
      imports: [MaterialModule, FormsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
