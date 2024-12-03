import Link from 'next/link'
import { EntityProductCart } from '~/entities/entitycandles'
import AddToFavorites from '~/features/AddToFavorites'
import ImageGallery from '~/shared/ui/ImageGallery'

export type GridItemsPropsType = {
	id: string
	title: string
	images: string[]
	price: number
	version: number
	color_id: string
	category_id: string

	focusImage: boolean
}

export const CatalogItem = ({
	id,
	title,
	images,
	price,
	version,
	color_id,
	category_id,
	focusImage
}: GridItemsPropsType) => {
	return (
		<EntityProductCart key={id} border={true}>
			<Link href={`/catalog/${id}`}>
				<ImageGallery focusImage={focusImage} images={images} />
			</Link>
			<div className='flex flex-col px-2  border-t border-black pt-5 text-myDestructive'>
				<h5>{title}</h5>
				<div className='flex justify-between gap-2 border-t py-2 items-center'>
					<div className='font-bold'>{price} ₽</div>
					<AddToFavorites
						images={images[0]}
						title={title}
						id={id}
						price={price}
						version={version}
						colorId={color_id}
						categoryId={category_id}
					/>
				</div>
			</div>
		</EntityProductCart>
	)
}

export default CatalogItem
