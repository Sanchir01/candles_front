import {
   infiniteQueryOptions,
   keepPreviousData,
   queryOptions
} from '@tanstack/react-query'
import { gqlRequest } from '~/shared/api/api-instance'
import {
   AllCandlesDocument,
   CandleByIdDocument
} from '~/shared/graphql/gql/graphql'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
export type AllCandlesQueryType = {
   sort: CandlesSortEnum
   categoryId: string | null
   colorId: string | null
   pageNumber: number
   pageSize?: number
}
export type AllCandlesQueryOptionsType = Omit<
   AllCandlesQueryType,
   'pageNumber' | 'pageSize'
>
export type InfiniteData = {}
export const candlesService = {
   allCandleKey: 'allcandles',
   candlesByIdKey: 'candleById',
   async allCandles({
      sort,
      categoryId,
      colorId,
      pageNumber = 1,
      pageSize = 20
   }: AllCandlesQueryType) {
      return gqlRequest.request({
         document: AllCandlesDocument,
         variables: {
            sort,
            filter: { categoryId, colorId },
            pageNumber,
            pageSize
         }
      })
   },
   async candleById({ id }: { id: string }) {
      return gqlRequest.request({
         document: CandleByIdDocument,
         variables: { input: { id: id } }
      })
   },
   AllCandlesQueryOptions: ({
      sort,
      categoryId,
      colorId
   }: AllCandlesQueryOptionsType) => {
      return queryOptions({
         queryFn: meta =>
            candlesService.allCandles({
               sort,
               categoryId,
               colorId,
               pageNumber: meta.pageParam as number,
               pageSize: 20
            }),
         queryKey: [candlesService.allCandleKey, { sort, categoryId, colorId }]
      })
   },
   InfiniteAllCandlesQueryOptions: ({
      sort,
      categoryId,
      colorId
   }: AllCandlesQueryOptionsType) => {
      return infiniteQueryOptions({
         queryFn: meta =>
            candlesService.allCandles({
               sort,
               categoryId,
               colorId,
               pageNumber: meta.pageParam,
               pageSize: 20
            }),
         queryKey: [candlesService.allCandleKey, { sort, categoryId, colorId }],
         getNextPageParam: data =>
            data.candles?.allCandles.__typename === 'AllCandlesOk'
               ? data.candles.allCandles.page
               : 0,
         initialPageParam: 1,
         select: data =>
            data.pages.flatMap(data =>
               data.candles?.allCandles.__typename === 'AllCandlesOk'
                  ? data.candles.allCandles.candles
                  : []
            )
      })
   },
   CandleByIdQueryOptions: ({ id }: { id: string }) => {
      return queryOptions({
         queryKey: ['candleById', id],
         queryFn: () => candlesService.candleById({ id }),
         select: data => data.candles?.candleById,
         enabled: !!id,
         placeholderData: keepPreviousData
      })
   }
}
