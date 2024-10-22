import React from 'react'
import { EntityCategory } from '~/entities/entitycategory/category'
import { CategoryTitle } from '~/widgets/category/ui/Title'
export interface CategoryLayoutProps {
	title: React.ReactNode
}

export const CategoryLayout = ({ title }: CategoryLayoutProps) => {
	return <EntityCategory>{title}</EntityCategory>
}
