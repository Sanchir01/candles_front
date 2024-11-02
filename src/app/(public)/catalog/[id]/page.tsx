import { gqlRequest } from '~/shared/api/api-instance'
import {
   AllCandlesDocument,
   CandlesSortEnum
} from '~/shared/graphql/gql/graphql'

import { candlesService } from '~/shared/service/candles'
import { Loader } from '~/shared/ui'

export async function generateStaticParams() {
   const candles = await gqlRequest.request(AllCandlesDocument, {
      sort: CandlesSortEnum.PriceDesc
   })

   return candles.candles?.allCandles.__typename == 'AllCandlesOk'
      ? candles.candles.allCandles.candles.map(item => ({
           id: item.id
        }))
      : []
}
export async function generateMetadata(props: {
   params: Promise<{ id: string }>
}) {
   try {
      const params = await props.params
      const { candles } = await candlesService.candleById(params.id)
      if (candles?.candleById.__typename == 'CandlesByIdOk') {
         return {
            title: candles.candleById.candle.id
         }
      }
   } catch (error) {
      return {
         title: 'Product Not Found'
      }
   }
}
export default async function Page(props: { params: Promise<{ id: string }> }) {
   const params = await props.params
   if (params.id === 'favicon.ico') {
      return <Loader />
   }
   const { candles } = await candlesService.candleById(params.id)

   return (
      <div>
         My Post{' '}
         {candles?.candleById.__typename === 'CandlesByIdOk'
            ? candles.candleById.candle.id
            : 'no data'}
      </div>
   )
}
