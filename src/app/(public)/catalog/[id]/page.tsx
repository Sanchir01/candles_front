import { gqlRequest } from '~/shared/service'
import { AllCandlesDocument } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'

export async function generateStaticParams() {
   const posts = await gqlRequest.request(AllCandlesDocument)

   return posts.candles?.allCandles.__typename == 'AllCandlesOk'
      ? posts.candles.allCandles.candles.map(item => ({
           id: item.id
        }))
      : []
}

export default async function Page({ params }: { params: { id: string } }) {
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
