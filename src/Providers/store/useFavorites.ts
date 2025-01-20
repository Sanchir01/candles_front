import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { ICart } from './useCart'

export interface IFavoritesItems extends Omit<ICart, 'quantity' | 'slug'> {}

export interface IFavoritesStore {
	favorites: IFavoritesItems[]
	setFavorites: (favorites: IFavoritesItems) => void
}

export const useFavorites = create<IFavoritesStore>()(
	persist(
		devtools(
			(set, get) => ({
				favorites: [],
				setFavorites: item => {
					const fav = get().favorites
					const index = fav?.findIndex(
						cartItem =>
							cartItem.id === item.id &&
							cartItem.categoryId === item.categoryId &&
							cartItem.colorId === item.colorId
					)
					if (index === -1) {
						set({ favorites: [...fav, item] })
					} else {
						fav.splice(index, 1)
						set({ favorites: [...fav] })
					}
				}
			}),
			{
				name: 'cart store'
			}
		),
		{
			name: 'favorites',
			version: 0,
			storage: createJSONStorage(() => localStorage)
		}
	)
)
