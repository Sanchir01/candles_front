'use client'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useFilters } from '~/Providers/store/useFilters'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import { AllCandlesQuery } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import { Loader } from '~/shared/ui'
import GridItem from './item'
import { useIntersections } from '~/shared/hooks/useIntersections'
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

   const {
      data,
      isPlaceholderData,
      isLoading,
      isSuccess,
      fetchNextPage,
      isError,
      hasNextPage,
      isFetchingNextPage
   } = useInfiniteQuery({
      ...candlesService.InfiniteAllCandlesQueryOptions({
         categoryId,
         colorId,
         sort
      }),
      enabled: !!initialdata
   })
   const cursorRef = useIntersections(() => {
      fetchNextPage()
   })

   if (isPlaceholderData || isLoading) {
      return [...Array(10)].map((_, i) => <SkeletonCart key={i} />)
   }
   if (isError) {
      return <div className=''>ошибка во время загрузки данных</div>
   }
   console.log(data)
   return (
      <>
         {isSuccess &&
            data.map(
               ({
                  title,
                  images,
                  id,
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
                  />
               )
            )}
         <div className='flex gap-2 mt-10' ref={cursorRef}>
            {!hasNextPage && <div>Нет данных для загрузки </div>}
            {isFetchingNextPage && <Loader />}
         </div>
      </>
   )
}

export default Items
