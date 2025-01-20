import { Trash } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import useCartStore, { ICart } from '~/Providers/store/useCart'
import { EntityProductCart } from '~/entities/entityProductCart'
import AddToFavorites from '~/features/AddToFavorites'

import { cn, priceFormat } from '~/shared/lib/utils'
import { Button } from '~/shared/ui'
export type CartItemType = {
	children?: ReactNode
} & ICart
const CartItem = ({
	id,
	title,
	images,
	price,
	version,
	categoryId,
	colorId,
	quantity,
	children
}: CartItemType) => {
	const toggleItem = useCartStore(state => state.toggleCartItem)
	const { theme } = useTheme()
	return (
		<EntityProductCart
			key={id}
			className={cn(
				'py-5 border-b-[1px] gap-5',
				theme === 'dark' && 'border-white '
			)}
		>
			<Link href={`/catalog/${id}`} className='col-span-1'>
				<Image
					src={images}
					alt={title}
					width={0}
					height={0}
					className='h-full w-auto '
					sizes='100vw'
				/>
			</Link>

			<div className={cn('flex flex-col justify-between w-full col-span-3')}>
				<div className='flex gap-5 justify-between'>
					<h5>{title}</h5>
					<h5>{priceFormat.format(price)}</h5>
				</div>
				<div className='flex gap-5 justify-between'>
					{children}
					<div className='flex gap-5'>
						<AddToFavorites
							images={images}
							id={id}
							title={title}
							price={price}
							version={version}
							colorId={colorId}
							categoryId={categoryId}
						/>
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
			</div>
		</EntityProductCart>
	)
}

export default CartItem
