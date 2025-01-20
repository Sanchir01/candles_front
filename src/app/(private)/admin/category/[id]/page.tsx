'use client'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'
import { categoryService } from '~/shared/service/category'
import { Loader } from '~/shared/ui'

const AdminOneCategoryPage: NextPage = () => {
	const { id } = useParams<{ id: string }>()
	const { data, isLoading, isError } = useQuery({
		...categoryService.categoryByIdQueryOptions({ id })
	})
	if (isLoading) {
		return <Loader />
	}
	if (isError) {
		return <div>Ошибка</div>
	}
	const category = data?.category?.categoryById

	return (
		category?.__typename === 'CategoryByIdOk' && (
			<div className='px-5'>
				<div className=''>Категория: {category.category?.title}</div>
			</div>
		)
	)
}

export default AdminOneCategoryPage
