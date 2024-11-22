'use client'
import AddToCart from '~/features/AddToCart'
import AddToFavorites from '~/features/AddToFavorites'
import useCartStore from '~/Providers/store/useCart'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import { priceFormat } from '~/shared/lib/utils'

type OneCandleFormType = {
   title: string
   slug: string
   price: number
   weight: number
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
   weight,
   images,
   category_id,
   color_id,
   id,
   version
}: OneCandleFormType) => {
    const cardStore = useStoreZustand(useCartStore, state => state.cart)
    const isExistCard = cardStore?.findIndex(
       cartItem =>
          cartItem.id === id &&
          cartItem.categoryId === category_id &&
          cartItem.colorId === color_id
    )
   return (
      <div className='mt-5'>
         <h1 className='text-4xl'>{title}</h1>
         <div className='text-xl flex gap-2 pt-5'>
            <span className="">{priceFormat.format(price)} </span>
            <span className="line-through text-gray-500">{priceFormat.format(price * 1.1)}</span>
         </div>
         <div className='flex gap-2 pt-5'>
            <AddToCart
               text={isExistCard ? 'Добавить в корзину' : 'Убрать из корзины'}
               images={images[0]}
               quantity={0}
               categoryId={category_id}
               colorId={color_id}
               id={id}
               title={title}
               price={price}
               version={version}
               slug={slug}
            />
            <AddToFavorites
               id={id}
               images={images[0]}
               categoryId={category_id}
               colorId={color_id}
               title={title}
               price={price}
               version={version}
               slug={slug}
            />
         </div>
      </div>
   )
}

export default Form
