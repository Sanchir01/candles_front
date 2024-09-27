import style from '~/shared/styles/Header.module.scss'
import React from 'react'
export interface HeaderLayoutProps {
	nav: React.ReactNode
	actions: React.ReactNode
	logo: React.ReactNode
}

export const HeaderLayout = ({ nav, actions, logo }: HeaderLayoutProps) => {
	return (
		<header className={style.header}>
			<div className='container'>
				<div className={style.header_wrapper}>
					{logo}
					{nav}
					{actions}
				</div>
			</div>
		</header>
	)
}
