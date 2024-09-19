import React from 'react'
import Link from 'next/link'

import { Instagram, AtSign } from 'lucide-react'

import style from '../../shared/styles/Footer.module.scss'

export const Footer: React.FC = () => {
	return (
		<footer className={style.footer}>
			<div className='container'>
				<div className={style.footer_wrapper}>
					<div className={style.footer_nav}>
						<Link href='/' className={style.footer_nav_link}>
							Главная
						</Link>
						<Link href='/catalog' className={style.footer_nav_link}>
							Каталог
						</Link>
						<Link href='/' className={style.footer_nav_link}>
							ЛОГОТИПЕЕ
						</Link>
						<Link href='/about' className={style.footer_nav_link}>
							О нас
						</Link>
						<Link href='/contacts' className={style.footer_nav_link}>
							Контакты
						</Link>
					</div>
					<span className={style.footer_phone}>+8 8000 555 35 35</span>
					<div className={style.footer_info}>
						<span className={style.footer_info_address}>
							<iframe
								className={style.footer_info_map}
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88161.27047344427!2d44.18846387403443!3d46.32890599526273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4101d18d723fcdcf%3A0xc89feef7b5786df5!2z0K3Qu9C40YHRgtCwLCDQoNC10YHQvy4g0JrQsNC70LzRi9C60LjRjw!5e0!3m2!1sru!2sru!4v1726753884896!5m2!1sru!2sru'
								width='600'
								height='450'
								loading='lazy'
							></iframe>
						</span>
						<div className={style.footer_info_networks}>
							<Link
								href='https://www.youtube.com/watch?v=9f5zD7ZSNpQ&list=RDGMEM6CZm14o9sc-Q22TIneLI8g&index=5'
								className={style.footer_nav_link}
							>
								<Instagram style={{ strokeWidth: 2 }} size={40} />
							</Link>
							<Link
								href='https://www.youtube.com/watch?v=vx6aZprDBEc'
								className={style.footer_nav_link}
							>
								<AtSign style={{ strokeWidth: 2 }} size={40} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
