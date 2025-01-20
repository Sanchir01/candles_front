'use client'
import { Home, Menu } from 'lucide-react'

import { HeaderVariant } from '~/shared/constants/header'
import style from '~/shared/styles/Header.module.scss'
import { Button, ButtonLink } from '~/shared/ui'
import { Separator } from '~/shared/ui/separator'
import { SidebarTrigger } from '~/shared/ui/sidebar'
import { ReactNode } from 'react'
import { useBurger } from '~/Providers/store/useBurger'
export type HeaderLayoutPropsType = {
	nav?: ReactNode
	logo?: ReactNode
	profile?: ReactNode
	admin?: ReactNode
	theme?: ReactNode
	variant?: HeaderVariant
	favorite?: ReactNode
	breadcrumbs?: ReactNode
	shoppingCart?: ReactNode
	burger?: ReactNode
}

export const HeaderLayout = ({
	nav,
	logo,
	profile,
	admin,
	variant,
	favorite,
	theme,
	breadcrumbs,
	shoppingCart,
	burger
}: HeaderLayoutPropsType) => {
	const toggleBurger = useBurger(state => state.setToggleBurger)
	if (variant === HeaderVariant.ADMIN) {
		return (
			<header className={style.header}>
				<div className='flex px-4 items-center justify-between'>
					<div className='flex items-center'>
						<SidebarTrigger className='-ml-1' />
						<Separator orientation='vertical' className='mr-2 h-4' />
						{breadcrumbs}
					</div>
					<div className='flex gap-3 items-center'>
						{theme}
						{profile}
						<ButtonLink href='/' variant='ghost' size='icon'>
							<Home />
						</ButtonLink>
					</div>
				</div>
			</header>
		)
	}

	return (
		<header className={style.header}>
			<div className='container'>
				<div className={style.header_wrapper}>
					<div className={'max-[998px]:hidden'}>{logo}</div>
					<nav className={'max-[998px]:hidden'}>{nav}</nav>
					<div className='max-[998px]:hidden flex gap-2 items-center'>
						{favorite}
						{shoppingCart}
						{profile}
						{theme}
						{admin}
					</div>
					<div className='min-[999px]:hidden'>
						<Button
							aria-label='Открыть бургер меню'
							className='pointer  lg:hidden'
							onClick={toggleBurger}
							variant={'ghost'}
							size={'icon'}
						>
							<Menu />
						</Button>
					</div>
					<div className='min-[999px]:hidden'>{shoppingCart}</div>
					{burger}
				</div>
			</div>
		</header>
	)
}
