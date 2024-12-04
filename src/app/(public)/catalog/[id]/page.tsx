import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import OneCandle from '~/widgets/onCandle'

export const revalidate = 600

export async function generateStaticParams() {
   const candles = await candlesService.allCandles({
      sort: CandlesSortEnum.PriceDesc,
      categoryId: null,
      colorId: null,
      pageNumber: 1,
      pageSize: 20
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
      const { candles } = await candlesService.candleById({ id: params.id })
      if (candles?.candleById.__typename == 'CandlesByIdOk') {
         return {
            title: candles.candleById.candle.id,
            description: candles.candleById.candle.description,
            keywords: candles.candleById.candle.title,
            robots: 'index, follow'
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

   const { candles } = await candlesService.candleById({ id: params.id })

   return (
      <div className='mt-10'>
         <div className='container'>
            <div className='flex flex-col gap-10'>
               {candles?.candleById.__typename === 'CandlesByIdOk' ? (
                  <OneCandle {...candles.candleById.candle} />
               ) : (
                  <div className=''>no data</div>
               )}
            </div>
         </div>
      </div>
   )
}
