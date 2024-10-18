'use client'
import useCartStore, { ICart } from '~/Providers/store/useCart'
import { Button } from '~/shared/ui'

const AddToCart = ({
   cart,
   text
}: {
   cart: ICart
   text: string
}) => {
   const toggleCart = useCartStore(state => state.toggleCartItem)

   return (
      <Button
         onClick={() =>
            toggleCart({
               id: cart.id,
               images: cart.images[0],
               title: cart.title,
               price: cart.price,
               categoryId: cart.categoryId,
               colorId: cart.colorId,
               slug: cart.slug,
               quantity: cart.quantity,
               version: cart.version
            })
         }
      >
         {text}
      </Button>
   )
}

export default AddToCart
