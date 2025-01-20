import {
	infiniteQueryOptions,
	keepPreviousData,
	queryOptions
} from '@tanstack/react-query'
import { gqlRequest } from '~/shared/api/api-instance'
import {
	AllCandlesDocument,
	AllCandlesTotalCountDocument,
	CandleByIdDocument,
	DeleteCandleByIdDocument
} from './../graphql/gql/graphql'

import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
export type AllCandlesQueryType = {
	sort: CandlesSortEnum | null
	categoryId: string | null
	colorId: string | null
	pageNumber: number
	pageSize?: number
}
export type AllCandlesQueryOptionsType = Omit<
	AllCandlesQueryType,
	'pageNumber' | 'pageSize'
>
export type InfiniteData = {}
export const candlesService = {
	allCandleKey: 'allcandles',
	candlesByIdKey: 'candleById',
	deleteCandleByIdKey: 'deleteCandleById',
	async allCandles({
		sort,
		categoryId,
		colorId,
		pageNumber = 1,
		pageSize = 20
	}: AllCandlesQueryType) {
		return gqlRequest.request({
			document: AllCandlesDocument,
			variables: {
				sort,
				filter: { categoryId: categoryId, colorId: colorId },
				pageNumber,
				pageSize
			}
		})
	},
	async deleteCandleById({ id }: { id: string }) {
		return gqlRequest.request({
			document: DeleteCandleByIdDocument,
			variables: {
				input: {
					id: id
				}
			}
		})
	},
	async candleById({ id }: { id: string }) {
		return gqlRequest.request({
			document: CandleByIdDocument,
			variables: { input: { id: id } }
		})
	},
	async AllCandlesTotalCount({
		sort,
		categoryId,
		colorId,
		pageNumber,
		pageSize
	}: AllCandlesQueryType) {
		return gqlRequest.request({
			document: AllCandlesTotalCountDocument,
			variables: {
				sort,
				filter: { categoryId, colorId },
				pageNumber,
				pageSize
			}
		})
	},
	AllCandlesQueryOptions: ({
		sort,
		categoryId,
		colorId
	}: AllCandlesQueryOptionsType) => {
		return queryOptions({
			queryFn: meta =>
				candlesService.allCandles({
					sort,
					categoryId: categoryId,
					colorId: colorId,
					pageNumber: meta.pageParam as number,
					pageSize: 20
				}),
			queryKey: [candlesService.allCandleKey, { sort, categoryId, colorId }],
			select: data => data.candles?.allCandles
		})
	},
	InfiniteAllCandlesQueryOptions: ({
		sort,
		categoryId,
		colorId
	}: AllCandlesQueryOptionsType) => {
		return infiniteQueryOptions({
			queryFn: meta =>
				candlesService.allCandles({
					sort,
					categoryId: categoryId,
					colorId: colorId,
					pageNumber: meta.pageParam,
					pageSize: 20
				}),
			queryKey: [candlesService.allCandleKey, { sort, categoryId, colorId }],
			getNextPageParam: data => {
				const allCandles = data.candles?.allCandles
				if (allCandles?.__typename !== 'AllCandlesOk') return null

				if (allCandles.totalCount?.__typename !== 'TotalCountResolvingOk')
					return null

				const hasMoreItems =
					allCandles.totalCount.totalCount > allCandles.prevPage * 20

				return hasMoreItems ? allCandles.nextPage : null
			},
			initialPageParam: 1,
			placeholderData: keepPreviousData,
			select: data =>
				data.pages.flatMap(data =>
					data.candles?.allCandles.__typename === 'AllCandlesOk'
						? data.candles.allCandles.candles
						: []
				)
		})
	},

	CandleByIdQueryOptions: ({ id }: { id: string }) => {
		return queryOptions({
			queryKey: ['candleById', id],
			queryFn: () => candlesService.candleById({ id }),
			select: data => data.candles?.candleById,
			enabled: !!id,
			placeholderData: keepPreviousData
		})
	}
}
