'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FC } from 'react'
import useCartStore from '~/Providers/store/useCart'
import { EntityProductCart } from '~/entities/entitycandles/Carts'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
const CartContent: FC = () => {
   const cartContetn = useStoreZustand(useCartStore, state => state.cart)

   const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 400 })

   if (cartContetn === undefined) {
      return 'Корзина пуста'
   }
   return (
      <div className='px-3' ref={parent}>
         {cartContetn.map(cartItem => (
            <EntityProductCart children={<div>test</div>} key={cartItem.id} />
         ))}
      </div>
   )
}

export default CartContent
