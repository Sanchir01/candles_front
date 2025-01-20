'use client'
import { useUser } from '~/Providers/store/useUser'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'

import { ShieldCheck } from 'lucide-react'
import { Role } from '~/shared/graphql/gql/graphql'
import { ButtonLink } from '~/shared/ui'
const HeaderAdmin = () => {
	const user = useStoreZustand(useUser, state => state.user)

	return user?.role === Role.Admin ? (
		<ButtonLink href={'/admin'} variant={'ghost'}>
			<ShieldCheck />
		</ButtonLink>
	) : (
		<></>
	)
}

export default HeaderAdmin
