import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule } from '@angular/router'
import { MaterialModule } from '../material.module'
import { CatalogsListComponent } from './catalogs-list/catalogs-list.component'

@NgModule({
  declarations: [HomeComponent, CatalogsListComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class HomeModule {}
