import { AllCandlesQuery } from '~/shared/graphql/gql/graphql'

import { Title } from '~/shared/ui'
import CatalogLayout from './ui/CatalogLayout'
import Items from '~/widgets/catalog/ui/Items'

const Catalog = ({ candles }: { candles: AllCandlesQuery }) => {
   return (
      <CatalogLayout
         grid={<Items initialdata={candles} />}
         title={<Title text={'Все свечи'} size='lg' />}
      />
   )
}

export default Catalog
