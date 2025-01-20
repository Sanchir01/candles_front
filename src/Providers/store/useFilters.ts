import { create } from 'zustand'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
export interface IFiltersStore {
	sorting: CandlesSortEnum | null
	category: string | null
	color: string | null
	pagination: string
	changeSorting: (data: CandlesSortEnum) => void
	changeCategory: (data: string) => void
	changeColors: (data: string) => void
	changePagination: (data: string) => void
	resetFilters: () => void
}

export const useFilters = create<IFiltersStore>(set => ({
	sorting: null,
	category: null,
	color: null,
	pagination: '1',
	changeCategory: (data: string) => set({ category: data }),
	changeSorting: (data: CandlesSortEnum) => set({ sorting: data }),
	changeColors: (data: string) => set({ color: data }),
	changePagination: (data: string) => set({ pagination: data }),
	resetFilters: () =>
		set({
			sorting: CandlesSortEnum.PriceAsc,
			category: null,
			color: null,
			pagination: '1'
		})
}))
