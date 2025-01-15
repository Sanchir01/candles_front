'use client'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { orderService } from '~/shared/service/orders'
import { Skeleton } from '~/shared/ui'
import AdminItemLine from '~/shared/ui/adminItem'

const AdminOrdersPage: NextPage = () => {
   const { data, isLoading, isSuccess } = useQuery({
      ...orderService.allOrdersQueryOptions()
   })
   return (
      <div className='flex flex-1 flex-col gap-4 p-4'>
         {isLoading ? (
            <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
               <Skeleton className='aspect-video rounded-xl' />
               <Skeleton className='aspect-video rounded-xl' />
               <Skeleton className='aspect-video rounded-xl' />
            </div>
         ) : isSuccess &&
           data?.__typename === 'AllOrdersOk' &&
           data.orders.length !== 0 ? (
            data.orders.map(({ id, status, total_amount }) => (
               <AdminItemLine
                  key={id}
                  View={<>view</>}
                  Update={<>update</>}
                  title={status}
                  Delete={<div>{total_amount}</div>}
               />
            ))
         ) : (
            <div className=''>нету заказов</div>
         )}
      </div>
   )
}

export default AdminOrdersPage
