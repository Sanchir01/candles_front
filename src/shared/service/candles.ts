import {
   AllCandlesDocument,
   CandleByIdDocument,
   CandlesSortEnum
} from '~/shared/graphql/gql/graphql'
import { gqlRequest } from '~/shared/service/index'

export const candlesService = {
   async allCandles() {
      return gqlRequest.request({
         document: AllCandlesDocument,
         variables: { sort: CandlesSortEnum.PriceAsc }
      })
   },
   async candleById(id: string) {
      return gqlRequest.request({
         document: CandleByIdDocument,
         variables: { input: { id: id } }
      })
   }
}
