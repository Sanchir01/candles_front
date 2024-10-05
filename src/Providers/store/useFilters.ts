import { create } from 'zustand'

export const useCategories = create()(set => ({
	activeCategoryId: 1,
	setActiveCategoryId: (categoryId: number) =>
		set({ activeCategoryId: categoryId })
}))
