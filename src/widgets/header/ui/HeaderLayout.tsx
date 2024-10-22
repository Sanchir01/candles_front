'use client'

import style from '~/shared/styles/Header.module.scss'
import React from 'react'
import { useBurger } from '~/Providers/store/useBurger'
import { Button } from '~/shared/ui/button'
import { Menu } from 'lucide-react'
export interface HeaderLayoutProps {
	nav?: React.ReactNode
	actions?: React.ReactNode
	logo?: React.ReactNode
	profile?: React.ReactNode
	burger?: React.ReactNode
}

export const HeaderLayout = ({
	nav,
	actions,
	logo,
	profile,
	burger
}: HeaderLayoutProps) => {
	const toggleBurger = useBurger(state => state.setToggleBurger)
	return (
		<header className={style.header}>
			<div className='container'>
				<div className={style.header_wrapper}>
					<Button
						aria-label='Открыть бургер меню'
						className='pointer  lg:hidden'
						onClick={toggleBurger}
						variant={'ghost'}
						size={'icon'}
					>
						<Menu />
					</Button>

					{burger}
					{logo}
					{nav}
					<div className='flex gap-5'>
						{profile}
						{actions}
					</div>
				</div>
			</div>
		</header>
	)
}
