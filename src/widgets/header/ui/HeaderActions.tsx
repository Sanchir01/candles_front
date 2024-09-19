import style from '~/shared/styles/Header.module.scss'
import Link from 'next/link'
import { Heart, ShoppingBasket } from 'lucide-react'
import React from 'react'

export const HeaderActions = () => {
	return (
		<div className={style.header_actions}>
			<Link
				href='/favorites'
				className={style.header_box_container_nav_right_favorites}
			>
				<Heart style={{ strokeWidth: 1 }} />
			</Link>
			<Link href='/cart' className={style.header_box_container_nav_right_cart}>
				<ShoppingBasket style={{ strokeWidth: 1 }} />
			</Link>
		</div>
	)
}
