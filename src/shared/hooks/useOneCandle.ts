import { UUID } from 'crypto'
import { useQuery } from '@tanstack/react-query'
import { candlesService } from '~/shared/service/candles'

export const useOneCanlde = (id: UUID) => {
   const { data, isSuccess, isLoading } = useQuery({
      ...candlesService.CandleByIdQueryOptions(id)
   })
   return { data, isLoading, isSuccess }
}
