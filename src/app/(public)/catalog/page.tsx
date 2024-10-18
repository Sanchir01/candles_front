import { Metadata } from 'next'
import type React from 'react'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { gqlRequest } from '~/shared/service'
import { candlesService } from '~/shared/service/candles'
import st from '~/shared/styles/Catalog.module.scss'
import { Container, Title } from '~/shared/ui'
import Catalog from '~/widgets/catalog'
export const metadata: Metadata = {
   title: 'Mahakala | Catalog'
}
export const revalidate = 36000
export async function SSGDataCandles() {
   const data = await candlesService.allCandles({
      sort: CandlesSortEnum.PriceDesc
   })
   return data ?? []
}

export default async function CatalogPage() {
   const data = await SSGDataCandles()
   return (
      <div className={st.catalog}>
         <Container>
            <Catalog candles={data} />
         </Container>
      </div>
   )
}
