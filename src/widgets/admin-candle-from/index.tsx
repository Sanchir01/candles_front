'use client'
import { useQuery } from '@tanstack/react-query'

import { candlesService } from '~/shared/service/candles'

const AdminCandleForm = ({ id }: { id: string }) => {
   const { data } = useQuery({
      ...candlesService.CandleByIdQueryOptions({ id })
   })
   if (data?.__typename === 'CandlesByIdOk')
      console.log('categoryId', data.candle.category_id)
   return <div>{data?.__typename === 'CandlesByIdOk' && data.candle.title}</div>
}

export default AdminCandleForm
