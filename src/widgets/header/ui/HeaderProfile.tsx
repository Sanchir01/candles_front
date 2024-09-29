'use client'

import { Button } from '~/shared/ui'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	DropdownMenuGroup
} from '~/shared/ui/dropdown-menu'
import { UsersRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

export const HeaderProfile: FC = () => {
	const isExistUser = false
	const { push, refresh } = useRouter()
	// const useProfile = useStoreZustand(useUser, state => state.user)
	// const logout = useUser(state => state.logout)
	const repoloadPage = () => {
		push('/catalog')
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<UsersRound className='cursor-pointer' />
			</DropdownMenuTrigger>
			{true ? (
				<DropdownMenuContent className='mt-3'>
					<DropdownMenuLabel>Ваш профиль</DropdownMenuLabel>
					<DropdownMenuGroup>
						<DropdownMenuItem>email</DropdownMenuItem>
						<DropdownMenuItem>
							<Button onClick={() => repoloadPage()}>Выйти из аккаунта</Button>
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			) : (
				<DropdownMenuContent className='w-full'>
					<Button onClick={() => repoloadPage()}>Войти</Button>
				</DropdownMenuContent>
			)}
		</DropdownMenu>
	)
}
