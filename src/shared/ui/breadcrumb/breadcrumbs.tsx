import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface IBreadcrumbItem {
	label: string
	href: string
}

interface IBreadcrumbsProps {
	items: IBreadcrumbItem[]
}

export function Breadcrumbs({ items }: IBreadcrumbsProps) {
	return (
		<nav className='flex' aria-label='Breadcrumb'>
			<ol className='flex items-center space-x-2'>
				<div className='hidden md:flex md:items-center md:space-x-2'>
					{items.map((item, index) => (
						<React.Fragment key={item.href}>
							{index > 0 && (
								<ChevronRight className='h-4 w-4 text-muted-foreground' />
							)}
							<li>
								<Link
									href={item.href}
									className={`text-sm ${
										index === items.length - 1
											? 'font-medium text-foreground'
											: 'text-muted-foreground hover:text-foreground'
									}`}
								>
									{item.label}
								</Link>
							</li>
						</React.Fragment>
					))}
				</div>
				<div className='flex md:hidden items-center space-x-2'>
					{items.length > 1 && (
						<>
							<li>
								<Link
									href={items[items.length - 2].href}
									className='text-sm text-muted-foreground hover:text-foreground'
								>
									{items[items.length - 2].label}
								</Link>
							</li>
							<ChevronRight className='h-4 w-4 text-muted-foreground' />
						</>
					)}
					<li>
						<Link
							href={items[items.length - 1].href}
							className='text-sm font-medium text-foreground'
						>
							{items[items.length - 1].label}
						</Link>
					</li>
				</div>
			</ol>
		</nav>
	)
}
