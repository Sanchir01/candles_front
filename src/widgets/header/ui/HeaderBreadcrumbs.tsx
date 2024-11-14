import { Breadcrumbs } from '~/shared/ui/breadcrumb/breadcrumbs'
import { useBreadcrumbs } from '~/shared/hooks/useBreadcrumbs'

const HeaderBreadcrumbs = () => {
   const breadcrumbsContent = useBreadcrumbs()
   return <Breadcrumbs items={breadcrumbsContent} />
}

export default HeaderBreadcrumbs
