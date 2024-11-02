import { queryOptions } from '@tanstack/react-query'
import { gqlRequest } from '~/shared/api/api-instance'
import {
   AddCategoryDocument,
   AllCategoryDocument
} from '~/shared/graphql/gql/graphql'

export const categoryService = {
   addToCategoryKey: 'addToCategory',
   allCategoryKey: 'allCategory',
   addToCategory({ title }: { title: string }) {
      return gqlRequest.request({
         document: AddCategoryDocument,
         variables: { input: { title: title } }
      })
   },
   addToCategoryQueryOptions: ({ title }: { title: string }) => {
      return queryOptions({
         queryKey: [categoryService.addToCategoryKey, title],
         queryFn: () => categoryService.addToCategory({ title }),
         enabled: !!title
      })
   },

   allCategory() {
      return gqlRequest.request({ document: AllCategoryDocument })
   },
   allCategoryQueryOptions: () => {
      return queryOptions({
         queryKey: [categoryService.allCategoryKey],
         queryFn: () => categoryService.allCategory(),
         select: data => data.category?.getAllCategory
      })
   }
}
