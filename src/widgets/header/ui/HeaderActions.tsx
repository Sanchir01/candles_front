import style from '~/shared/styles/Header.module.scss'
import Link from 'next/link'
import { Heart, ShoppingBasket } from 'lucide-react'
import React from 'react'

export const HeaderActions = () => {
	return (
		<div className={style.header_actions}>
			<Link href='/favorites' className={style.header_actions_favorites}>
				<Heart
					style={{ strokeWidth: 1 }}
					size={`clamp(0.625rem, 0.216rem + 2.05vw, 1.75rem)`}
				/>
			</Link>
			<Link href='/cart' className={style.header_actions_cart}>
				<ShoppingBasket
					style={{ strokeWidth: 1 }}
					size={`clamp(0.625rem, 0.216rem + 2.05vw, 1.75rem)`}
				/>
			</Link>
		</div>
	)
}
