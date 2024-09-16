import style from '~/shared/styles/Header.module.scss'
import Link from 'next/link'
import React from 'react'

export const HeaderNav = () => {
	return (
		<div className={style.header_nav}>
			<Link href='/' className={style.header_nav_home}>
				Главная
			</Link>
			<Link href='/' className={style.header_nav_catalog}>
				Каталог
			</Link>
			<Link href='/' className={style.header_nav_newsession}>
				Сезонные новинки
			</Link>
			<Link href='/' className={style.header_nav_contacts}>
				Контакты
			</Link>
		</div>
	)
}
