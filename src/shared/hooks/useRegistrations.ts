'use client'
import { useMutation } from '@tanstack/react-query'
import { useUser } from '~/Providers/store/useUser'
import { type RegistrationsType, authService } from '../service/auth'

export const useRegistrations = () => {
	const setUser = useUser(state => state.setUser)
	const { mutateAsync, data, isPending } = useMutation({
		mutationFn: ({ email, password, phone, title }: RegistrationsType) =>
			authService.registration({ email, password, phone, title }),
		mutationKey: [authService.registerKey],
		onSuccess: data => {
			data?.auth.registrations.__typename === 'RegistrationsOk' &&
				setUser(data.auth.registrations)
		}
	})
	return { mutateAsync, data, isPending }
}
