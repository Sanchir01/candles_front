import { ReactNode } from 'react'

export type ISliderProps = {
	spaceBetween?: number
	slidesPerView: number
	loop?: boolean
	children?: ReactNode
	BreakIsExist?: boolean
	centerSlide?: boolean
	bullets?: boolean
}

export type ISize = {
	__typename?: 'Size' | undefined
	id: number
	name: string
}
export type IColors = {
	__typename?: 'ReturnColors' | undefined
	id: number
	imageCss: string
	name: string
}
export type IOneProduct = {
	__typename?: string | undefined
	id: number
	images: string[]
	name: string
	price: number
	slug: string
	productColorId: number
	colors: IColors[]
	size: ISize[]
}

export type IFavoritesGrid = {
	__typename?: 'Product' | undefined
	id: number
	images: string[]
	name: string
	price: number
}
export type IPropsCatalog = {
	products: IOneProduct[]
}
export type ISliderBlockProduct = {
	title: string
	loop?: boolean
} & IPropsCatalog
