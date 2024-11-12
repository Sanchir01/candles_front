import { ChevronRight } from 'lucide-react'
import * as React from 'react'
import { dataSideBar } from '~/shared/constants/sidebar'

import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger
} from '~/shared/ui/collapsible'
import { SearchForm } from '~/shared/ui/search-form'
import {
   Sidebar,
   SidebarContent,
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
   return (
      <Sidebar {...props}>
         <SidebarHeader>
            <VersionSwitcher
               versions={dataSideBar.versions}
               defaultVersion={dataSideBar.versions[0]}
            />
            <SearchForm />
         </SidebarHeader>
         <SidebarContent className='gap-0'>
            {dataSideBar.navMain.map(item => (
               <Collapsible
                  key={item.title}
                  title={item.title}
                  defaultOpen
                  className='group/collapsible'
               >
                  <SidebarGroup>
                     <SidebarGroupLabel
                        asChild
                        className='group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                     >
                        <CollapsibleTrigger>
                           {item.title}{' '}
                           <ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                        </CollapsibleTrigger>
                     </SidebarGroupLabel>
                     <CollapsibleContent>
                        <SidebarGroupContent>
                           <SidebarMenu>
                              {item.items.map(item => (
                                 <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                       asChild
                                       isActive={item.isActive}
                                    >
                                       <a href={item.url}>{item.title}</a>
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
         <SidebarRail />
      </Sidebar>
   )
}
