import { ReactNode } from 'react'

export type IEntityCartProps = {
   priority?: boolean
   className?: string
   images: string[]
   children?: ReactNode
   price: number
   name: string
   slug: string
   colorId: number
}
