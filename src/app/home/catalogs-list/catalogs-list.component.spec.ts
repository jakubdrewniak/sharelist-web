import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs/internal/observable/of'
import { MaterialModule } from 'src/app/material.module'
import { Catalog } from 'src/app/shared/typings/catalog'
import { CatalogsListService } from '../services/catalogs.service'

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
      imports: [MaterialModule, RouterTestingModule],
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
