import React from 'react'

export const EntityProductCart = ({
	children
}: {
	children: React.ReactNode
}) => {
	return (
		<div className={'w-[200px] h-[300px]'}>
			<div className='flex flex-col'>{children}</div>
		</div>
	)
}
