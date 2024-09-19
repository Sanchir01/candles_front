import React from 'react'
import Link from 'next/link'

import style from '../../shared/styles/Header.module.scss'

import { Heart } from 'lucide-react'
import { ShoppingBasket } from 'lucide-react'

export const Header: React.FC = () => {
	return (
		<header className={style.header}>
			<div className='container'>
				<div className={style.header_wrapper}>
					<div className={style.header_logo}>свечи</div>
					<div className={style.header_nav}>
						<Link href='/' className={style.header_nav_left_home}>
							Главная
						</Link>
						<Link href='/' className={style.header_nav_left_catalog}>
							Каталог
						</Link>
						<Link href='/' className={style.header_nav_left_newsession}>
							Сезонные новинки
						</Link>
						<Link href='/' className={style.header_nav_left_contacts}>
							Контакты
						</Link>
					</div>
					<div className={style.header_actions}>
						<Link
							href='/favorites'
							className={style.header_box_container_nav_right_favorites}
						>
							<Heart style={{ strokeWidth: 1 }} />
						</Link>
						<Link
							href='/cart'
							className={style.header_box_container_nav_right_cart}
						>
							<ShoppingBasket style={{ strokeWidth: 1 }} />
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
