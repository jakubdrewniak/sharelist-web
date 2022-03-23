export type Catalog = { _id?: string; name: string; products?: Product[] }

export interface Product {
  name: string
  quantity?: number
  unit?: string
}
