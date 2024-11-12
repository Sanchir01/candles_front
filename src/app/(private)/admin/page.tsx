'use client'
import { useQuery } from '@tanstack/react-query'
import { categoryService } from '~/shared/service/category'
import AdminItemLine from '~/shared/ui/adminItem'

const AdminPage = () => {
   const { data, isLoading, isSuccess } = useQuery({
      ...categoryService.allCategoryQueryOptions()
   })
   return (
      <>
         <div className='flex flex-1 flex-col gap-4 p-4'>
            {isLoading
               ? Array.from({ length: 20 }).map((_, index) => (
                    <div
                       key={index}
                       className='aspect-video h-12 w-full rounded-lg bg-muted/50'
                    />
                 ))
               : isSuccess && data?.__typename === 'CategoryGetAllOk'
                 ? data.category.map(({ id, title }) => (
                      <AdminItemLine
                         id={id}
                         title={title}
                         key={id}
                         href={`/admin/${id}`}
                         Delete={<div>delete</div>}
                      />
                   ))
                 : 'нету категорий'}
         </div>
      </>
   )
}

export default AdminPage
