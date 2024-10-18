import {
   AllCandlesDocument,
   CandleByIdDocument
} from '~/shared/graphql/gql/graphql'
import { gqlRequest } from '~/shared/service/index'
import { CandlesSortEnum } from './../graphql/gql/graphql'

export const candlesService = {
   async allCandles({ sort }: { sort: CandlesSortEnum }) {
      return gqlRequest.request({
         document: AllCandlesDocument,
         variables: { sort }
      })
   },
   async candleById(id: string) {
      return gqlRequest.request({
         document: CandleByIdDocument,
         variables: { input: { id: id } }
      })
   }
}
