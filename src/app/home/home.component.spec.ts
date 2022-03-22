import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { MaterialModule } from '../material.module'
import { HeaderComponent } from '../shared/header/header.component'
import { CatalogsListComponent } from './catalogs-list/catalogs-list.component'
import { HomeComponent } from './home.component'
import { CatalogsListService } from './services/catalogs.service'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    TestBed.overrideTemplate(HomeComponent, '')
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule, MaterialModule],
      providers: [{ provide: CatalogsListService, useValue: {} }],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
