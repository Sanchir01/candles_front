'use client'
import styles from '~/shared/styles/Scrollbar.module.scss'
import { FC } from 'react'
import useCartStore from '~/Providers/store/useCart'
import { EntityProductCart } from '~/entities/entitycandles/Carts'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import { cn } from '~/shared/lib/utils'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import CartItem from './CartItem'
const CartContent: FC = () => {
   const cartContent = useStoreZustand(useCartStore, state => state.cart)
   const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 400 })
   if (cartContent === undefined) {
      return 'Корзина пуста'
   }
   return (
      <div className={cn(styles.scroll, 'h-[84vh]')}>
         <div className='px-3' ref={parent}>
            {cartContent.map(cartItem => (
               <CartItem key={cartItem.id} {...cartItem} />
            ))}
         </div>
      </div>
   )
}

export default CartContent
