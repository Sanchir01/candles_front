'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { EntityProductCart } from '~/entities/entitycandles/Carts'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import { AllCandlesQuery, CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
const AddToCart = dynamic(() => import('~/features/AddToCart'), {
   ssr: false
})
const AddToFavorites = dynamic(() => import('~/features/AddToFavorites'), {
   ssr: false
})
export type itemsGridType = {
   title: string
   images: string[]
   id: string
   slug: string
   price: number
   color_id: string
   category_id: string
   version: number
}[]

const Items = ({ initialdata }: { initialdata: AllCandlesQuery }) => {
   const { data, isLoading, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort: CandlesSortEnum.PriceAsc
      }),
      initialData: initialdata,
      enabled: !!initialdata
   })

   return isLoading
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
