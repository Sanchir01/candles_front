'use client'
import styles from '~/shared/styles/Header.module.scss'
import cn from 'clsx'
import { ReactNode } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useBurger } from '~/Providers/store/useBurger'

export const BurgerMenu = ({
	nav,
	admin,
	favorite,
	theme
}: {
	nav?: ReactNode
	theme?: ReactNode
	admin?: ReactNode
	favorite?: ReactNode
}) => {
	const [burger, toggleBurger] = useBurger(
		useShallow(state => [state.toggleBurger, state.setToggleBurger])
	)
	return (
		<div
			className={cn(styles.menu, burger ? styles.menu__active : 'lg:hidden')}
			onClick={toggleBurger}
		>
			<div className={styles.menu__content} onClick={e => e.stopPropagation()}>
				{nav}
			</div>
			<div className={styles.menu__footer}>
				<div className='py-2 flex items-center justify-evenly'>
					{admin}
					{favorite}
					{theme}
				</div>
			</div>
		</div>
	)
}
