'use client'
import Link from 'next/link'
import { useBurger } from '~/Providers/store/useBurger'
import { headerNavContent } from '~/shared/constants/header'
import { cn } from '~/shared/lib/utils'
import style from '~/shared/styles/Header.module.scss'

export const HeaderNav = ({ burgerNav = false }: { burgerNav?: boolean }) => {
	const toggleBurger = useBurger(state => state.setToggleBurger)
	if (burgerNav) {
		return (
			<div className={style.menu__content} onClick={e => e.stopPropagation()}>
				<nav>
					<ul className={style.menu__text}>
						{headerNavContent.map((content, id) => (
							<li onClick={toggleBurger} key={id}>
								<Link href={content.href}>{content.title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		)
	}
	return (
		<ul className={cn(style.header_nav, 'max-[998px]:flex-col')}>
			{headerNavContent.map((item, i) => (
				<li key={i}>
					<Link href={item.href}>{item.title}</Link>
				</li>
			))}
		</ul>
	)
}
