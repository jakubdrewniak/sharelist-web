import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { of } from 'rxjs/internal/observable/of'
import { Catalog, CatalogsListService } from '../services/catalogs.service'

import { CatalogsListComponent } from './catalogs-list.component'

describe('CatalogsListComponent', () => {
  let component: CatalogsListComponent
  let fixture: ComponentFixture<CatalogsListComponent>
  let el: DebugElement

  let mockCatalogsSvc: jasmine.SpyObj<CatalogsListService>
  const mockData: Catalog[] = [
    { name: 'catalog1' },
    { name: 'catalog2' },
    { name: 'catalog3' },
  ]

  beforeEach(async () => {
    mockCatalogsSvc = jasmine.createSpyObj(['getCatalogsList'])
    mockCatalogsSvc.getCatalogsList.and.returnValue(of(mockData))

    await TestBed.configureTestingModule({
      declarations: [CatalogsListComponent],
      providers: [{ provide: CatalogsListService, useValue: mockCatalogsSvc }],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogsListComponent)
    component = fixture.componentInstance
    el = fixture.debugElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render list of catalogs', () => {
    mockCatalogsSvc.getCatalogsList.and.returnValue(of(mockData))
    fixture.detectChanges()
    const catalogsList = el.queryAll(By.css('mat-list-item'))

    expect(catalogsList.length).toBe(mockData.length)
  })
})
