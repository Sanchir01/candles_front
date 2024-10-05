'use client'

import React from 'react'

import style from '~/shared/styles/Header.module.scss'

import { useBurger } from '../../../Providers/store/useBurger'

import { header } from '../../../shared/constants/header'

// import FavoritesLogo from '@/shared/icons/Favorites/FavoritesLogo'
import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'
// import HeaderAdmin from './HeaderAdmin'
// import { HeaderProfile } from './HeaderProfile'

export const BurgerMenu: FC = () => {
	const [burger, toggleBurger] = useBurger(
		useShallow(state => [state.toggleBurger, state.setToggleBurger])
	)
	return (
		<div
			className={cn(style.menu, burger ? style.menu__active : 'lg:hidden')}
			onClick={toggleBurger}
		>
			<div className={style.menu__content} onClick={e => e.stopPropagation()}>
				<nav>
					<ul className={style.menu__text}>
						{header.map(content => (
							<li onClick={toggleBurger} key={content.id}>
								<Link href={content.href}>{content.title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className={style.menu__footer}>
				<div className='py-2 flex items-center justify-evenly'>
					{/* <FavoritesLogo />
					
					<HeaderAdmin />
					<HeaderProfile /> */}
				</div>
			</div>
		</div>
	)
}
