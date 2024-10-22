'use client'
import { useQuery } from '@tanstack/react-query'
import { candlesService } from '~/shared/service/candles'
import { colorsService } from '~/shared/service/colors'
import { categorysService } from '~/shared/service/categorys'

export const useAllCandles = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryFn: () => candlesService.allCandles(),
		queryKey: ['allcandles'],
		select: data => data.candles?.allCandles
	})

	return { data, isLoading, isSuccess, isError }
}

export const useAllColor = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryFn: () => colorsService.allColors(),
		queryKey: ['allcolors'],
		select: data => data.color?.allColor
	})

	return { data, isLoading, isSuccess, isError }
}

export const useAllCategorys = () => {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryFn: () => categorysService.allCategorys(),
		queryKey: ['allcategorys'],
		select: data => data.category?.getAllCategory
	})

	return { data, isLoading, isSuccess, isError }
}
