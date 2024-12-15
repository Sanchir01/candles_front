import { queryOptions } from '@tanstack/react-query'
import { gqlRequest } from '../api/api-instance'
import {
   AllOrdersDocument,
   AllUserOrdersDocument,
   CreateOrderDocument,
   CreateOrderInput
} from '../graphql/gql/graphql'

export const orderService = {
   allOrdersKey: 'allOrders',
   allUserOrdersKey: 'allUserOrders',
   createUserOrderKey: 'createOrder',
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
   async crateOrder({ items }: { items: CreateOrderInput }) {
      return gqlRequest.request({
         document: CreateOrderDocument,
         variables: {
            input: {
               items: items.items
            }
         }
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
