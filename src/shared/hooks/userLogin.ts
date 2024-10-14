import { useMutation } from '@tanstack/react-query'
import { authService } from '../service/auth'
export type LoginType = {
   email: string
   password: string
}

export const useLogin = () => {
   const { mutateAsync, data, isPending } = useMutation({
      mutationKey: ['login'],
      mutationFn: ({ email, password }: LoginType) =>
         authService.login({ email, password })
   })
   return { mutateAsync, loginData: data, isPending }
}
