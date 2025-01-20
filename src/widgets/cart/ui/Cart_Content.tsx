'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FC } from 'react'
import useCartStore from '~/Providers/store/useCart'
import ChangeQuantityItem from '~/features/ChangeQuantity'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import { cn } from '~/shared/lib/utils'
import styles from '~/shared/styles/Scrollbar.module.scss'
import CartItem from './CartItem'
const CartContent: FC = () => {
	const cartContent = useStoreZustand(useCartStore, state => state.cart)
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 400 })
	if (cartContent === undefined) {
		return 'Корзина пуста'
	}
	return (
		<div className={cn(styles.scroll, 'h-[84dvh] max-[768px]:h-[75dvh]')}>
			<div className='px-3' ref={parent}>
				{cartContent.map(cartItem => (
					<CartItem key={cartItem.id} {...cartItem}>
						<ChangeQuantityItem
							id={cartItem.id}
							colorId={cartItem.colorId}
							categoryId={cartItem.categoryId}
							quantity={cartItem.quantity}
						/>
					</CartItem>
				))}
			</div>
		</div>
	)
}

export default CartContent
