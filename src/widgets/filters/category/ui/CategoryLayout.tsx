import React from 'react'
import { EntityCategory } from '~/entities/entityfilters/category'

export interface CategoryLayoutProps {
	title: React.ReactNode
}

export const CategoryLayout = ({ title }: CategoryLayoutProps) => {
	return <EntityCategory>{title}</EntityCategory>
}
