'use client'
import useCartStore, { ICart } from '~/Providers/store/useCart'
import { Button } from '~/shared/ui'
export interface IAddToCart extends Omit<ICart, 'slug'> {
	text: string
}

const AddToCart = ({
	id,
	categoryId,
	colorId,
	images,
	price,
	quantity,

	title,
	version,
	text
}: IAddToCart) => {
	const toggleCart = useCartStore(state => state.toggleCartItem)

	return (
		<Button
			onClick={() =>
				toggleCart({
					id,
					images,
					title,
					price,
					categoryId,
					colorId,
					quantity,
					version
				})
			}
		>
			{text}
		</Button>
	)
}
export default AddToCart
