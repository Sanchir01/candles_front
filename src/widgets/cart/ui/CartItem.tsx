import { Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { EntityProductCart } from '~/entities/entityProductCart'
import useCartStore, { ICart } from '~/Providers/store/useCart'

import { cn } from '~/shared/lib/utils'
import { Button } from '~/shared/ui'

const CartItem = ({
	id,
	title,
	images,
	price,
	version,
	categoryId,
	colorId,
	quantity
}: ICart) => {
	const toggleItem = useCartStore(state => state.toggleCartItem)
	return (
		<EntityProductCart key={id} className='gap-5'>
			<Link href={`/catalog/${id}`}>
				<Image src={images} alt={title} width={400} height={400} />
			</Link>
			<div className={cn('flex flex-col gap-5 w-full')}>
				<div className='flex gap-5'>
					<h5>{title}</h5>
					<h5>{price}</h5>
				</div>
				<div className=''>
					<Button
						className=''
						variant={'default'}
						onClick={() =>
							toggleItem({
								id,
								title,
								images,
								price,
								quantity,
								version,
								colorId,
								categoryId
							})
						}
					>
						<Trash />
					</Button>
				</div>
			</div>
		</EntityProductCart>
	)
}

export default CartItem
