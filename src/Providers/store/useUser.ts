import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
export interface IUser {
   id: string
   phone: string
   email: string
   role: string
}
export interface IUserStore {
   user: IUser | null
   setUser: (data: IUser) => void
   logout: () => void
   // checkAuth: () => void
   // resetUser: () => void
}
export const useUser = create<IUserStore>()(
   persist(
      set => ({
         user: null,
         setUser: (data: IUser) => set({ user: data }),
         logout: () => set({ user: null })
      }),
      {
         version: 0,
         name: 'user',
         storage: createJSONStorage(() => localStorage)
      }
   )
)
