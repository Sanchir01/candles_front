'use client'
import { useQuery } from '@tanstack/react-query'
import { candlesService } from '~/shared/service/candles'
import { AllCandlesQuery, CandlesSortEnum } from '../graphql/gql/graphql'

export const useAllCandles = ({
   sort,
   initialdata
}: { sort: CandlesSortEnum; initialdata: AllCandlesQuery }) => {
   const { data, isLoading, isSuccess, isError } = useQuery({
      queryFn: () => candlesService.allCandles({ sort }),
      queryKey: ['allcandles'],
      initialData: initialdata,
      select: data => data.candles?.allCandles
   })

   return { data, isLoading, isSuccess, isError }
}
