import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule } from '@angular/router'
import { MaterialModule } from '../material.module'
import { CatalogsListComponent } from './catalogs-list/catalogs-list.component'
import { SharedModule } from '../shared/shared.module'
import { CatalogsListService } from './services/catalogs.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [HomeComponent, CatalogsListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [CatalogsListService],
})
export class HomeModule {}
