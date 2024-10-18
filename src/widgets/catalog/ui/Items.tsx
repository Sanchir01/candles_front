'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Image from 'next/image'
import { EntityProductCart } from '~/entities/entitycandles/Carts'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import { AddToCart } from '~/features/AddToCart/AddToItemCart'
import { AddToFavorites } from '~/features/AddToFavorites/AddTofavorites'
import { AllCandlesQuery, CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { useAllCandles } from '~/shared/hooks/useAllCandles'
import st from '~/shared/styles/Catalog.module.scss'

const Items = ({ initialdata }: { initialdata: AllCandlesQuery }) => {
   const { data, isLoading, isSuccess } = useAllCandles({
      sort: CandlesSortEnum.PriceAsc,
      initialdata
   })
   const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })
   return (
      <div className={st.catalog__content} ref={parent}>
         {isLoading
            ? [...Array(10)].map((_, i) => <SkeletonCart key={i} />)
            : isSuccess && data?.__typename === 'AllCandlesOk'
              ? data.candles.map(
                   ({
                      title,
                      images,
                      id,
                      slug,
                      price,
                      color_id,
                      category_id,
                      version
                   }) => (
                      <EntityProductCart key={id}>
                         <Image
                            src={images[0]}
                            alt={title}
                            width={200}
                            height={300}
                         />
                         <h5></h5>
                         <div className='flex justify-between gap-2'>
                            <AddToCart
                               text={'добавить в корзину'}
                               images={images[0]}
                               quantity={1}
                               title={title}
                               id={id}
                               slug={slug}
                               price={price}
                               version={version}
                               colorId={color_id}
                               categoryId={category_id}
                            />
                            <AddToFavorites
                               images={images}
                               title={title}
                               id={id}
                               slug={slug}
                               price={price}
                               version={version}
                               colorId={color_id}
                               categoryId={category_id}
                            />
                         </div>
                      </EntityProductCart>
                   )
                )
              : 'ошибка при загрузке данных'}
      </div>
   )
}

export default Items
