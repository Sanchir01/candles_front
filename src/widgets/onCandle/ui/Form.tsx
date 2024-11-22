import AddToCart from '~/features/AddToCart'
import AddToFavorites from '~/features/AddToFavorites'

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
   return (
      <div>
         <h1 className='text-4xl'>{title}</h1>
         <div className='text-xl'>{slug}</div>
         <div className='text-xl'>Цена: {price}</div>
         <div className='text-xl'>Вес: {weight}</div>
         <div className='flex gap-2'>
            <AddToCart
               text={'Добавить в корзину'}
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
