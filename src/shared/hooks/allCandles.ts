'use client'
import { useQuery } from '@tanstack/react-query'
import { candlesService } from '~/shared/service/candles'

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
		queryFn: () => candlesService.allColors(),
		queryKey: ['allcolors'],
		select: data => data.candles?.allColors
	})

	return { data, isLoading, isSuccess, isError }
}
