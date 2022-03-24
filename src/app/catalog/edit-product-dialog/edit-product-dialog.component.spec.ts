import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MaterialModule } from 'src/app/material.module'
import { ProductFormComponent } from '../product-form/product-form.component'

import { EditProductDialogComponent } from './edit-product-dialog.component'

describe('EditProductDialogComponent', () => {
  let component: EditProductDialogComponent
  let fixture: ComponentFixture<EditProductDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProductDialogComponent, ProductFormComponent],
      imports: [MaterialModule, FormsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
