'use client'
import { useMutation } from '@tanstack/react-query'
import { useUser } from '~/Providers/store/useUser'
import { authService } from '../service/auth'
export type LoginType = {
   email: string
   password: string
}

export const useLogin = () => {
   const setUser = useUser(state => state.setUser)
   const { mutateAsync, data, isPending } = useMutation({
      mutationKey: [authService.loginKey],
      mutationFn: ({ email, password }: LoginType) =>
         authService.login({ email, password }),
      onSettled: data => {
         data?.auth.login.__typename === 'LoginOk' && setUser(data.auth.login)
      }
   })
   return { mutateAsync, loginData: data, isPending }
}
