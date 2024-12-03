import Link from 'next/link'
import { cn } from '~/shared/lib/utils'
export type FooterColumContentType = {
	title: string
	href: string
}
export type FooterColumnType = {
	title: string
	content: FooterColumContentType[]
	column: boolean
}
const FooterColumn = ({ title, content, column }: FooterColumnType) => {
	return (
		<div className=''>
			<h4 className='text-xl'>{title}</h4>
			<div className={cn('flex gap-1 mt-3', column ? 'flex-col' : '')}>
				{content.map((item, i) => {
					const typedItem = item as FooterColumContentType
					return (
						<Link
							href={typedItem.href}
							key={i}
							className='text-primary hover:underline'
						>
							{typedItem.title}
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default FooterColumn
