import { useAutoAnimate } from '@formkit/auto-animate/react'
import Link from 'next/link'
import * as React from 'react'
import { dataSideBar } from '~/shared/constants/sidebar'

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '~/shared/ui/collapsible'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail
} from '~/shared/ui/sidebar'
import { VersionSwitcher } from '~/shared/ui/version-switcher'

export default function AppSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const [parent] = useAutoAnimate({ duration: 200, easing: 'ease-in' })
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<VersionSwitcher
					versions={dataSideBar.versions}
					defaultVersion={dataSideBar.versions[0]}
				/>
			</SidebarHeader>
			<SidebarContent className='gap-0'>
				{dataSideBar.navMain.map(({ title, items, Icon }) => (
					<Collapsible
						key={title}
						title={title}
						defaultOpen={false}
						className='group/collapsible'
					>
						<SidebarGroup>
							<SidebarGroupLabel
								asChild
								className='group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
							>
								<CollapsibleTrigger className='w-full flex items-center'>
									{title}
									<Icon className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
								</CollapsibleTrigger>
							</SidebarGroupLabel>
							<CollapsibleContent ref={parent}>
								<SidebarGroupContent>
									<SidebarMenu>
										{items.map(({ title, url }) => (
											<SidebarMenuItem key={title}>
												<SidebarMenuButton asChild>
													<Link href={url}>{title}</Link>
												</SidebarMenuButton>
											</SidebarMenuItem>
										))}
									</SidebarMenu>
								</SidebarGroupContent>
							</CollapsibleContent>
						</SidebarGroup>
					</Collapsible>
				))}
			</SidebarContent>
			<SidebarFooter>footer</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
