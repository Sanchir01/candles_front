'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { DeleteItem } from '~/features/Admin/deleteItem'
import { colorService } from '~/shared/service/color'
import { Button } from '~/shared/ui'
import AdminItemLine from '~/shared/ui/adminItem'

const ColorsAdminPage: NextPage = () => {
   const [animateRef] = useAutoAnimate({ duration: 300 })
   const { data, isLoading, isSuccess } = useQuery({
      ...colorService.allColorQueryOptions()
   })
   return (
      <div ref={animateRef} className='flex flex-1 flex-col gap-4 p-4'>
         <Button href={'/admin/colors/create-color'} className='max-w-[400px]'>
            Создать цвет
         </Button>
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
                      Delete={
                         <DeleteItem
                            id={id}
                            mutateFn={() =>
                               colorService.deleteColorById({ id })
                            }
                            mutateKey={colorService.addToColorKey}
                            invalidateKey={colorService.allColorKey}
                         />
                      }
                   />
                ))
              : 'нету категорий'}
      </div>
   )
}

export default ColorsAdminPage
