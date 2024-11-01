'use client'

import { FC } from 'react'
import useCartStore from '~/Providers/store/useCart'
import { EntityProductCart } from '~/entities/entitycandles/Carts'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
const CartContent: FC = () => {
   const cartContent = useStoreZustand(useCartStore, state => state.cart)

   if (cartContent === undefined) {
      return 'Корзина пуста'
   }
   return cartContent.map(cartItem => (
      <EntityProductCart children={<div>test</div>} key={cartItem.id} />
   ))
}

export default CartContent
