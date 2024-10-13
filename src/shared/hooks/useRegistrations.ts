import { useMutation } from '@tanstack/react-query'
import { type RegistrationsType, authService } from '../service/auth'

export const useRegistrations = () => {
   const { mutateAsync, data, isPending } = useMutation({
      mutationFn: ({ email, password, phone, title }: RegistrationsType) =>
         authService.registration({ email, password, phone, title }),
      mutationKey: ['login']
   })
   return { mutateAsync, data, isPending }
}
