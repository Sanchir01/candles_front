import { CategoryLayout } from '~/widgets/category/ui/CategoryLayout'

export interface CategoryProps {
	id: string
	title: string
}
export const Category = ({ title }: CategoryProps) => {
	return <CategoryLayout title={title} />
}
