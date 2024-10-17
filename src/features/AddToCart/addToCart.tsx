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
               image: cart.image,
               title: cart.title,
               price: cart.price,
               categoryId: cart.categoryId,
               colorId: cart.colorId,
               slug: cart.slug,
               quantity: cart.quantity,
               version: cart.version,
               images: cart.images[0],
               quantityItems: 1
            })
         }
      >
         {text}
      </Button>
   )
}

export default AddToCart
