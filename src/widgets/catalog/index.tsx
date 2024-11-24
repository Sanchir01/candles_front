'use client'
import dynamic from 'next/dynamic'
import { AllCandlesQuery } from '~/shared/graphql/gql/graphql'
import { Title } from '~/shared/ui'
import CatalogLayout from '~/widgets/catalog/ui/CatalogLayout'
import Items from '~/widgets/catalog/ui/Items'
import Sorting from '~/widgets/catalog/ui/sorting'
const FiltersSheet = dynamic(() => import('~/widgets/catalog/ui/filters'), {
   ssr: false
})

const Catalog = ({ candles }: { candles: AllCandlesQuery }) => {
   return (
      <CatalogLayout
         grid={<Items initialdata={candles} />}
         title={<Title text={'Все свечи'} size='lg' />}
         sorting={<Sorting />}
         filters={<FiltersSheet />}
      />
   )
}

export default Catalog
