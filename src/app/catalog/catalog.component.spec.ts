import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CatalogComponent } from './catalog.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('CatalogComponent', () => {
  let component: CatalogComponent
  let fixture: ComponentFixture<CatalogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogComponent],
      imports: [RouterTestingModule, RouterTestingModule],
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
