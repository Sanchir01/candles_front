import { Metadata, NextPage } from 'next'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import st from '~/shared/styles/Catalog.module.scss'
import { Container } from '~/shared/ui'
import Catalog from '~/widgets/catalog'

export const metadata: Metadata = {
   title: 'Mahakala | Catalog'
}

export const SSGDataCandles = async () => {
   const data = await candlesService.allCandles({
      sort: CandlesSortEnum.PriceDesc
   })

   return data
}

const CatalogPage: NextPage = async () => {
   const data = await SSGDataCandles()

   return (
      <div className={st.catalog}>
         <Container>
            <Catalog candles={data} />
         </Container>
      </div>
   )
}

export default CatalogPage
