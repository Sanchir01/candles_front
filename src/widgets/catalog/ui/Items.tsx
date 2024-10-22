'use client'
import Image from 'next/image'
import Link from 'next/link'
import { EntityProductCart } from '~/entities/entitycandles/Carts'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import { AddToCart } from '~/features/AddToCart/AddToItemCart'
import { AddToFavorites } from '~/features/AddToFavorites/AddTofavorites'
import { AllCandlesQuery, CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { useAllCandles } from '~/shared/hooks/useAllCandles'

const Items = ({ initialdata }: { initialdata: AllCandlesQuery }) => {
   const { data, isPending, isLoading, isSuccess, isFetching } = useAllCandles({
      sort: CandlesSortEnum.PriceAsc,
      initialdata
   })

   return isFetching
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
                   <Link href={`/catalog/${id}`}>
                      <Image
                         src={images[0]}
                         alt={title}
                         width={300}
                         height={500}
                      />
                   </Link>
                   <div className='flex flex-col px-2'>
                      <h5>{title}</h5>
                      <div className='flex justify-between gap-2 '>
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
                   </div>
                </EntityProductCart>
             )
          )
        : 'ошибка при загрузке данных'
}

export default Items
