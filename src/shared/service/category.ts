import { queryOptions } from '@tanstack/react-query'
import { gqlRequest } from '~/shared/api/api-instance'
import {
   AddCategoryDocument,
   AllCategoryDocument,
   CategoryByIdDocument,
   DeleteCategoryByIdDocument
} from '~/shared/graphql/gql/graphql'

export const categoryService = {
   addToCategoryKey: 'addToCategory',
   categoryByIdKey: 'categoryById',
   allCategoryKey: 'allCategory',
   deleCategoryKey: 'deleteCategory',
   addToCategory({ title }: { title: string }) {
      return gqlRequest.request({
         document: AddCategoryDocument,
         variables: { input: { title: title } }
      })
   },
   async categoryById({ id }: { id: string }) {
      return gqlRequest.request({
         document: CategoryByIdDocument,
         variables: { input: { id } }
      })
   },
   async deleteCategoryById({ id }: { id: string }) {
      return gqlRequest.request({
         document: DeleteCategoryByIdDocument,
         variables: { input: { id } }
      })
   },
   async allCategory() {
      return gqlRequest.request({ document: AllCategoryDocument })
   },
   addToCategoryQueryOptions: ({ title }: { title: string }) => {
      return queryOptions({
         queryKey: [categoryService.addToCategoryKey, title],
         queryFn: () => categoryService.addToCategory({ title }),
         enabled: !!title
      })
   },

   allCategoryQueryOptions: () => {
      return queryOptions({
         queryKey: [categoryService.allCategoryKey],
         queryFn: () => categoryService.allCategory(),
         select: data => data.category?.getAllCategory
      })
   },
   categoryByIdQueryOptions: ({ id }: { id: string }) => {
      return queryOptions({
         queryKey: [categoryService.categoryByIdKey, id],
         queryFn: () => categoryService.categoryById({ id })
      })
   }
}
