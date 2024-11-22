import { keepPreviousData, queryOptions } from '@tanstack/react-query'
import { gqlRequest } from '~/shared/api/api-instance'
import {
   AllCandlesDocument,
   CandleByIdDocument
} from '~/shared/graphql/gql/graphql'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
export type AllCandlesQueryType = {
   sort: CandlesSortEnum
   categoryId?: string
   colorId?: string
   pageNumber?: number
   pageSize?: number
}

export const candlesService = {
   allCandleKey: 'allcandles',
   candlesByIdKey: 'candleById',
   async allCandles({
      sort,
      categoryId,
      colorId,
      pageNumber = 1,
      pageSize = 10
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
      colorId,
      pageNumber = 1,
      pageSize = 10
   }: AllCandlesQueryType) => {
      return queryOptions({
         queryFn: meta =>
            candlesService.allCandles({
               sort,
               categoryId,
               colorId,
               pageNumber,
               pageSize
            }),
         queryKey: [candlesService.allCandleKey],
         placeholderData: keepPreviousData,
         select: data => data.candles?.allCandles
      })
   },

   CandleByIdQueryOptions: ({ id }: { id: string }) => {
      return queryOptions({
         queryKey: [candlesService.candlesByIdKey, id],
         queryFn: () => candlesService.candleById({ id }),
         select: data => data.candles?.candleById,
         enabled: !!id,
         placeholderData: keepPreviousData
      })
   }
}
