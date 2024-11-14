'use client'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'
import { candlesService } from '~/shared/service/candles'
import { categoryService } from '~/shared/service/category'

const AdminOneCandle: NextPage = () => {
   const { id } = useParams<{ id: string }>()
   const { data } = useQuery({
      ...candlesService.CandleByIdQueryOptions({ id })
   })
   if (data?.__typename === 'CandlesByIdOk')
      console.log('categoryId', data.candle.category_id)
   const { data: categoriesData } = useQuery({
      ...categoryService.categoryByIdQueryOptions(
         data?.__typename === 'CandlesByIdOk' && data.candle.category_id
      ),
      enabled: data?.__typename === 'CandlesByIdOk'
   })
 
   return <div>{id}</div>
}

export default AdminOneCandle
