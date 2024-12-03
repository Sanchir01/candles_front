'use client'
import { useBreadcrumbs } from '~/shared/hooks/useBreadcrumbs'
import { Breadcrumbs } from '~/shared/ui/breadcrumb/breadcrumbs'

const HeaderBreadcrumbs = () => {
	const breadcrumbsContent = useBreadcrumbs()
	return <Breadcrumbs items={breadcrumbsContent} />
}

export default HeaderBreadcrumbs
