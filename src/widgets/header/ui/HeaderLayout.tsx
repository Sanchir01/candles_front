import style from '~/shared/styles/Header.module.scss'
import { HeaderLogo } from '~/widgets/header/ui/HeaderLogo'
import { HeaderNav } from '~/widgets/header/ui/HeaderNav'
import { HeaderActions } from '~/widgets/header/ui/HeaderActions'
import React from 'react'
export interface HeaderLayoutProps {
	nav: React.ReactNode
	actions: React.ReactNode
	logo: React.ReactNode
	profile: React.ReactNode
}

export const HeaderLayout = ({
	nav,
	actions,
	logo,
	profile
}: HeaderLayoutProps) => {
	return (
		<header className={style.header}>
			<div className='container'>
				<div className={style.header_wrapper}>
					{logo}
					{nav}
					<div className='flex gap-5 items-center'>
						{profile}
						{actions}
					</div>
				</div>
			</div>
		</header>
	)
}
