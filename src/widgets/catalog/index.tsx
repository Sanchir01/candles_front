import { AllCandlesQuery } from '~/shared/graphql/gql/graphql'

import { Title } from '~/shared/ui'
import CatalogLayout from './ui/CatalogLayout'
import Filters from './ui/Filters'
import Items from './ui/Items'

const Catalog = ({ candles }: { candles: AllCandlesQuery }) => {
   return (
      <CatalogLayout
         grid={<Items initialdata={candles} />}
         title={<Title text={'Все свечи'} size='lg' />}
         filters={<Filters />}
      />
   )
}

export default Catalog
