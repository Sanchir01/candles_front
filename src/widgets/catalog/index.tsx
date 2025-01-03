'use client'
import dynamic from 'next/dynamic'
import { AllCandlesQuery } from '~/shared/graphql/gql/graphql'
import { Title } from '~/shared/ui'

import st from '~/shared/styles/Catalog.module.scss'
import CatalogLayout from '~/widgets/catalog/ui/CatalogLayout'
import Sorting from '~/widgets/catalog/ui/sorting'
import Items from './ui/Items'
const FiltersSheet = dynamic(() => import('~/widgets/catalog/ui/filters'), {
   ssr: false
})

const Catalog = ({ candles }: { candles: AllCandlesQuery }) => {
   return (
      <CatalogLayout
         grid={<Items initialdata={candles} />}
         title={
            <Title text={'Все свечи'} size='lg' className={st.catalog__title} />
         }
         sorting={<Sorting />}
         filters={<FiltersSheet />}
      />
   )
}

export default Catalog
