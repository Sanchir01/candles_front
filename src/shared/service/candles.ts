import { keepPreviousData, queryOptions } from '@tanstack/react-query'
import { gqlRequest } from '~/shared/api/api-instance'
import {
   AllCandlesDocument,
   CandleByIdDocument
} from '~/shared/graphql/gql/graphql'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { IAllCandles } from '~/shared/hooks/useAllCandles'

export const candlesService = {
   allCandleKey: 'allcandles',
   candlesByIdKey: 'candleById',
   async allCandles({ sort }: { sort: CandlesSortEnum }) {
      return gqlRequest.request({
         document: AllCandlesDocument,
         variables: { sort }
      })
   },
   AllCandlesQueryOptions: ({ sort, initialdata }: IAllCandles) => {
      return queryOptions({
         queryFn: meta => candlesService.allCandles({ sort }),
         queryKey: [candlesService.allCandleKey],
         initialData: initialdata,
         enabled: !initialdata,
         placeholderData: keepPreviousData,
         select: data => data.candles?.allCandles
      })
   },

   CandleByIdQueryOptions: (id: string) => {
      return queryOptions({
         queryKey: [candlesService.candlesByIdKey, id],
         queryFn: () => candlesService.candleById(id),
         select: data => data.candles?.candleById,
         enabled: !!id
      })
   },
   async candleById(id: string) {
      return gqlRequest.request({
         document: CandleByIdDocument,
         variables: { input: { id: id } }
      })
   }
}
