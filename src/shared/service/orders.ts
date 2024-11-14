import { queryOptions } from '@tanstack/react-query'
import { gqlRequest } from '../api/api-instance'
import {
   AllOrdersDocument,
   AllUserOrdersDocument
} from '../graphql/gql/graphql'

export const orderService = {
   allOrdersKey: 'allOrders',
   allUserOrdersKey: 'allUserOrders',
   async allColors() {
      return gqlRequest.request({
         document: AllOrdersDocument
      })
   },
   async allUserOrders() {
      return gqlRequest.request({
         document: AllUserOrdersDocument
      })
   },
   allUserOrdersQueryOptions: () => {
      return queryOptions({
         queryKey: [orderService.allUserOrdersKey],
         queryFn: () => orderService.allUserOrders(),
         select: data => data.orders?.allUserOrders
      })
   },
   allOrdersQueryOptions: () => {
      return queryOptions({
         queryKey: [orderService.allOrdersKey],
         queryFn: () => orderService.allColors(),
         select: data => data.orders?.allOrders
      })
   }
}
