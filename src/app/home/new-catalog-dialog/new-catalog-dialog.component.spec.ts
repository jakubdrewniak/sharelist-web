import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MaterialModule } from 'src/app/material.module'
import { NewCatalogDialogComponent } from './new-catalog-dialog.component'

describe('NewCatalogDialogComponent', () => {
  let component: NewCatalogDialogComponent
  let fixture: ComponentFixture<NewCatalogDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCatalogDialogComponent],
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
    fixture = TestBed.createComponent(NewCatalogDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
