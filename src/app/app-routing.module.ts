import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CatalogComponent } from './catalog/catalog.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog/:id', component: CatalogComponent },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
