import Link from 'next/link'
import style from '~/shared/styles/Header.module.scss'

export const HeaderLogo = () => {
	return (
		<Link href={'/'} className={style.header_logo}>
			Logo
		</Link>
	)
}
