'use client'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { useUser } from '~/Providers/store/useUser'
import { EnumTokens } from '~/shared/lib/Tokens.service'
export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	const accessToken = Cookie.get(EnumTokens.ACCESS_TOKEN)
	const router = useRouter()
	const logout = useUser(state => state.logout)

	useLayoutEffect(() => {
		if (!accessToken) {
			logout(), router.replace('/auth/login')
		}
	}, [accessToken, logout, router])

	return <>{children}</>
}
