import style from '~/shared/styles/Header.module.scss'
import Link from 'next/link'

export const HeaderNav = () => {
	return (
		<nav>
			<ul className={style.header_nav}>
				<li className={style.header_nav_left_home}>
					{' '}
					<Link href='/'>Главная</Link>
				</li>
				<li className={style.header_nav_left_catalog}>
					{' '}
					<Link href='/catalog'>Каталог</Link>
				</li>
				<li className={style.header_nav_left_newsession}>
					<Link href='/'>Сезонные новинки</Link>
				</li>
				<li className={style.header_nav_left_contacts}>
					<Link href='/'>Контакты</Link>
				</li>
			</ul>
		</nav>
	)
}
