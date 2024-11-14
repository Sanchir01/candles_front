'use client'
import { useQuery } from '@tanstack/react-query'
import { candlesService } from '~/shared/service/candles'
import { AllCandlesQuery, CandlesSortEnum } from '../graphql/gql/graphql'
export interface IAllCandles {
   sort: CandlesSortEnum
   initialdata?: AllCandlesQuery
}
export const useAllCandles = ({ sort, initialdata }: IAllCandles) => {
   const { data, isPending, isLoading, isSuccess, isFetching } = useQuery({
      ...candlesService.AllCandlesQueryOptions({ sort }),
      initialData: initialdata,
      enabled: !!initialdata
   })

   return { data, isPending, isSuccess, isLoading, isFetching }
}
