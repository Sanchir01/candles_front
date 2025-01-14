'use client'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { DeleteItem } from '~/features/Admin/deleteItem'
import { categoryService } from '~/shared/service/category'
import { Button } from '~/shared/ui'
import { UpdateLink } from '~/shared/ui/admin/update'
import AdminItemLine from '~/shared/ui/adminItem'
import AdminItemView from '~/shared/ui/adminItemView'

const CategoryAdminPage: NextPage = () => {
   const { data, isLoading, isSuccess } = useQuery({
      ...categoryService.allCategoryQueryOptions()
   })
   return (
      <div className='flex flex-1 flex-col gap-4 p-4'>
         <Button
            className='max-w-[400px]'
            href={`/admin/category/create-category`}
         >
            Create Category
         </Button>
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
                      title={title}
                      key={id}
                      View={<AdminItemView href={`/admin/category/${id}`} />}
                      Update={
                         <UpdateLink href={`/admin/category/create-category`} />
                      }
                      Delete={
                         <DeleteItem
                            id={id}
                            mutateKey={categoryService.deleCategoryKey}
                            mutateFn={() =>
                               categoryService.deleteCategoryById({ id })
                            }
                            invalidateKey={categoryService.allCategoryKey}
                         />
                      }
                   />
                ))
              : 'нету категорий'}
      </div>
   )
}

export default CategoryAdminPage
