'use client'
import { useQuery } from '@tanstack/react-query'

import { colorsService } from '~/shared/service/colors'

export const useAllColor = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryFn: () => colorsService.allColors(),
		queryKey: ['allcolors'],
		select: data => data.color?.allColor
	})

	return { data, isLoading, isSuccess, isError }
}
