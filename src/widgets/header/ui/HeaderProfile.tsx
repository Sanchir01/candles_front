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
		// <div
		// 	className={`dropdown clamp(0.625rem, calc(0.216rem + 2.05vw), 1.75rem)`}
		// >
		// </div>
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<UsersRound
					style={{ strokeWidth: 1 }}
					size={`clamp(0.625rem, 0.216rem + 2.05vw, 1.75rem)`}
				/>
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
