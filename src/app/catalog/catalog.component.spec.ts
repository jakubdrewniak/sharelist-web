import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CatalogComponent } from './catalog.component'
import { RouterTestingModule } from '@angular/router/testing'
import { Socket } from 'ngx-socket-io'
import { MaterialModule } from '../material.module'
import { of } from 'rxjs'
import { HeaderComponent } from '../shared/header/header.component'
import { FormsModule } from '@angular/forms'
import { ProductFormComponent } from './product-form/product-form.component'
import { ProductsListComponent } from './products-list/products-list.component'

describe('CatalogComponent', () => {
  let component: CatalogComponent
  let fixture: ComponentFixture<CatalogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CatalogComponent,
        HeaderComponent,
        ProductFormComponent,
        ProductsListComponent,
      ],
      imports: [
        RouterTestingModule,
        RouterTestingModule,
        MaterialModule,
        FormsModule,
      ],
      providers: [
        {
          provide: Socket,
          useValue: { fromEvent: () => of({}), emit: () => {} },
        },
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
