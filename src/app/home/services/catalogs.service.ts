import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Catalog } from 'src/app/shared/typings/catalog'

@Injectable()
export class CatalogsListService {
  private baseApiURL = 'http://localhost:8000'

  constructor(private httpClient: HttpClient) {}

  getCatalogsList(): Observable<Catalog[]> {
    return this.httpClient.get<Catalog[]>(`${this.baseApiURL}/catalogs`)
  }

  addNewCatalog(name: string): Observable<string> {
    return this.httpClient.post<string>(`${this.baseApiURL}/catalogs`, { name })
  }
}
