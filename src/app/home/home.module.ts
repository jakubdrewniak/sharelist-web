import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule } from '@angular/router'
import { MaterialModule } from '../material.module'
import { CatalogsListComponent } from './catalogs-list/catalogs-list.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [HomeComponent, CatalogsListComponent],
  imports: [CommonModule, RouterModule, MaterialModule, SharedModule],
})
export class HomeModule {}
