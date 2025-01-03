import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { Role } from '~/shared/graphql/gql/graphql'
import { authService } from '~/shared/service/auth'
export interface IUser {
   phone: string
   email: string
   title: string
   role: Role
}
export interface IUserStore {
   user: IUser | null
   setUser: (data: IUser) => void
   logout: () => void
   // resetUser: () => void
}
export const useUser = create<IUserStore>()(
   persist(
      set => ({
         user: null,
         setUser: (data: IUser) => set({ user: data }),
         logout: () => {
            set({ user: null })
            authService.deleteToken()
         }
      }),
      {
         version: 0,
         name: 'user',
         storage: createJSONStorage(() => localStorage)
      }
   )
)
