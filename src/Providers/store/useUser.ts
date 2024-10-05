import { create } from 'zustand'

export interface IUser {
	id: string
	phone: string
	email: string
	role: string
}
export interface IUserStore {
	user: IUser | null
	// setUser: (data: IUserProps) => void
	// logout: () => void
	// checkAuth: () => void
	// resetUser: () => void
}
export const useUser = create<IUserStore>()(set => ({
	user: null
}))
