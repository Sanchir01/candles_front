import AddToCart from '~/features/AddToCart/addToCart'
import { ProductCardPropsType } from '..'

export const ProductCartActions = ({
   title,
   id,
   categoryId,
   colorId,
   images,
   price,
   slug,
   version
}: ProductCardPropsType) => {
   return (
      <div className='flex justify-between'>
         <AddToCart
            cart={{
               id,
               images: images[0],
               title,
               price,
               categoryId,
               slug,
               colorId,
               quantity: 1,
               version
            }}
            text={'добавить в корзину'}
         />
         <div className=''>test</div>
      </div>
   )
}
