import React from 'react'
import { useTheme } from 'next-themes'
import { cn } from '~/shared/lib/utils'

type EntityProductCartItemType = {
	className?: string
	children?: React.ReactNode
}

const EntityProductCartItem = ({
	className,
	children
}: EntityProductCartItemType) => {
	const { theme } = useTheme()
	return (
		<div
			className={cn(
				'grid grid-cols-2 border-b-[1px] border-opacity-25 border-black w-full',
				theme === 'dark' && 'border-b-white',
				className
			)}
		>
			{children}
		</div>
	)
}

export default EntityProductCartItem
