import useCartStore from '~/Providers/store/useCart'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FC } from 'react'
import ChangeQuantityItem from '~/features/ChangeQuantity'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import CartItem from '~/widgets/cart/ui/CartItem'

const Content: FC = () => {
   const cart = useStoreZustand(useCartStore, state => state.cart)
   const [parent] = useAutoAnimate({ duration: 400, easing: 'ease-in-out' })
   return (
      <div ref={parent} className='flex flex-col '>
         {cart?.map(item => (
            <CartItem
               key={item.id}
               images={item.images}
               quantity={item.quantity}
               version={item.version}
               id={item.id}
               colorId={item.colorId}
               categoryId={item.categoryId}
               title={item.title}
               price={item.price}
            >
               <ChangeQuantityItem
                  id={item.id}
                  colorId={item.colorId}
                  categoryId={item.categoryId}
                  quantity={item.quantity}
               />
            </CartItem>
         ))}
      </div>
   )
}

export default Content
