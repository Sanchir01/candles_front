import { queryOptions } from '@tanstack/react-query'
import { gqlRequest } from '~/shared/api/api-instance'
import {
   AddToColorDocument,
   AllColorDocument
} from '~/shared/graphql/gql/graphql'

export const colorService = {
   addToColorKey: 'addToColor',
   allColorKey: 'allColor',
   colorByIdKey: 'colorById',
   async addToColor({ title }: { title: string }) {
      return gqlRequest.request({
         document: AddToColorDocument,
         variables: { input: { title: title } }
      })
   },
   async allColor() {
      return gqlRequest.request({ document: AllColorDocument })
   },
   allColorQueryOptions: () => {
      return queryOptions({
         queryKey: [colorService.allColorKey],
         queryFn: () => colorService.allColor(),
         select: data => data.color?.allColor
      })
   }
}
