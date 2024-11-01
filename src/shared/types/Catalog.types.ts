import { UUID } from 'crypto'

export type ProductCardPropsType = {
   id: UUID
   title: string
   price: number
   version: number
   slug: string
   images: string[]
   colorId: UUID
   categoryId: UUID
}
