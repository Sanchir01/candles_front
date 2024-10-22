import React from 'react'

export const EntityCategory = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={''}>
			<button className='flex flex-col'>{children}</button>
		</div>
	)
}
