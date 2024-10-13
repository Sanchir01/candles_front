import { useMutation } from '@tanstack/react-query'
import { authService } from '../service/auth'

export const useLogin = () => {
    const [] = useMutation({
        mutationFn: () => authService.login({
            
        }),
        mutationKey: ['login']
    })
 }
