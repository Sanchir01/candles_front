'use client'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { colorService } from '~/shared/service/color'
import AdminItemLine from '~/shared/ui/adminItem'

const ColorsAdminPage: NextPage = () => {
   const { data, isLoading, isSuccess } = useQuery({
      ...colorService.allColorQueryOptions()
   })
   return (
      <div className='flex flex-1 flex-col gap-4 p-4'>
         {isLoading
            ? Array.from({ length: 20 }).map((_, index) => (
                 <div
                    key={index}
                    className='aspect-video h-12 w-full rounded-lg bg-muted/50'
                 />
              ))
            : isSuccess && data?.__typename === 'AllColorOk'
              ? data.colors.map(({ id, title }) => (
                   <AdminItemLine
                      title={title}
                      key={id}
                      View={<>view</>}
                      Update={<>update</>}
                      Delete={<div>delete</div>}
                   />
                ))
              : 'нету категорий'}
      </div>
   )
}

export default ColorsAdminPage
