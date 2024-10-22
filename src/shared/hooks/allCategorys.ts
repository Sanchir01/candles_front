'use client'
import { useQuery } from '@tanstack/react-query'
import { categorysService } from '~/shared/service/categorys'

export const useAllCategorys = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryFn: () => categorysService.allCategorys(),
		queryKey: ['allcategorys'],
		select: data => data.category?.getAllCategory
	})

	return { data, isLoading, isSuccess, isError }
}
