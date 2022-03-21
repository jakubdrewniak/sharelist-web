import { ComponentFixture, TestBed } from '@angular/core/testing'
import { of } from 'rxjs/internal/observable/of'
import { CatalogsListService } from '../services/catalogs.service'

import { CatalogsListComponent } from './catalogs-list.component'

describe('CatalogsListComponent', () => {
  let component: CatalogsListComponent
  let fixture: ComponentFixture<CatalogsListComponent>

  let mockCatalogsSvc

  beforeEach(async () => {
    mockCatalogsSvc = jasmine.createSpyObj(['getCatalogsList'])
    mockCatalogsSvc.getCatalogsList.and.returnValue(of([]))

    await TestBed.configureTestingModule({
      declarations: [CatalogsListComponent],
      providers: [{ provide: CatalogsListService, useValue: mockCatalogsSvc }],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
