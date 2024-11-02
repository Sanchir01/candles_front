'use client'
import useCartStore, { ICart } from '~/Providers/store/useCart'
import { Button } from '~/shared/ui'
export interface IAddToCart extends ICart {
   text: string
}

export const AddToCart = ({
   id,
   categoryId,
   colorId,
   images,
   price,
   quantity,
   slug,
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
               slug,
               quantity,
               version
            })
         }
      >
         {text}
      </Button>
   )
}
