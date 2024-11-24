'use client'
import { useInfiniteQuery } from '@tanstack/react-query'

import { useFilters } from '~/Providers/store/useFilters'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import { AllCandlesQuery } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import GridItem from './item'

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
   const sort = useFilters(state => state.sorting)
   const colorId = useFilters(state => state.color)
   const categoryId = useFilters(state => state.category)

   const { data, isPlaceholderData, isLoading, isSuccess } = useInfiniteQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort,
         colorId,
         categoryId
      }),
      
      initialPageParam: 1,
      getNextPageParam: result => true,
      enabled: !!initialdata
   })

   return isPlaceholderData || isLoading
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
                <GridItem
                   focusImage
                   key={id}
                   id={id}
                   title={title}
                   images={images}
                   price={price}
                   version={version}
                   color_id={color_id}
                   category_id={category_id}
                   slug={slug}
                />
             )
          )
        : 'ошибка при загрузке данных'
}

export default Items
