import Link from 'next/link'
import * as React from 'react'
import { dataSideBar } from '~/shared/constants/sidebar'

import { Collapsible, CollapsibleTrigger } from '~/shared/ui/collapsible'
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarRail
} from '~/shared/ui/sidebar'
import { VersionSwitcher } from '~/shared/ui/version-switcher'

export default function AppSidebar({
   ...props
}: React.ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar {...props}>
         <SidebarHeader>
            <VersionSwitcher
               versions={dataSideBar.versions}
               defaultVersion={dataSideBar.versions[0]}
            />
         </SidebarHeader>
         <SidebarContent className='gap-0'>
            {dataSideBar.navMain.map(({ title, url, Icon }) => (
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
                        <Link href={url}>
                           <CollapsibleTrigger className='w-full flex items-center'>
                              {title}
                              <Icon className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90 size-5' />
                           </CollapsibleTrigger>
                        </Link>
                     </SidebarGroupLabel>
                  </SidebarGroup>
               </Collapsible>
            ))}
         </SidebarContent>
         <SidebarFooter>footer</SidebarFooter>
         <SidebarRail />
      </Sidebar>
   )
}
