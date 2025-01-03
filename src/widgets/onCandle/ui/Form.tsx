'use client'
import useCartStore from '~/Providers/store/useCart'
import AddToCart from '~/features/AddToCart'
import AddToFavorites from '~/features/AddToFavorites'
import { priceFormat } from '~/shared/lib/utils'

type OneCandleFormType = {
   title: string
   slug: string
   price: number

   images: string[]
   category_id: string
   color_id: string
   id: string
   version: number
}

const Form = ({
   title,
   slug,
   price,
   images,
   category_id,
   color_id,
   id,
   version
}: OneCandleFormType) => {
   const cardStore = useCartStore(state => state.cart)

   const isExistCard = cardStore.some(
      cartItem =>
         cartItem.id === id &&
         cartItem.categoryId === category_id &&
         cartItem.colorId === color_id
   )
   return (
      <div className='mt-5'>
         <h1 className='text-4xl'>{title}</h1>
         <div className='text-xl flex gap-2 pt-5'>
            <span className=''>{priceFormat.format(price)} </span>
            <span className='line-through text-gray-500'>
               {priceFormat.format(price * 1.1)}
            </span>
         </div>
         <div className='flex gap-2 pt-5'>
            <AddToCart
               text={isExistCard ? 'Убрать из корзины' : 'Добавить в корзину'}
               images={images[0]}
               quantity={1}
               categoryId={category_id}
               colorId={color_id}
               id={id}
               title={title}
               price={price}
               version={version}
            />
            <AddToFavorites
               id={id}
               images={images[0]}
               categoryId={category_id}
               colorId={color_id}
               title={title}
               price={price}
               version={version}
            />
         </div>
      </div>
   )
}

export default Form
