import { CandlestickChartIcon } from 'lucide-react'
import Link from 'next/link'
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarGroupContent,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem
} from '~/shared/ui/sidebar'

const AsideAdmin = () => {
   return (
      <Sidebar variant='sidebar'>
         <div className='flex flex-col  items-center w-full justify-between'>
            <SidebarHeader>Logo</SidebarHeader>
            <SidebarContent className='flex-1'>
               <SidebarGroup className='flex flex-col  items-center w-full'>
                  <SidebarGroupContent>
                     <SidebarMenu>
                        <SidebarMenuButton>
                           <Link
                              href={'/admin/candles'}
                              className='flex gap-2 w-full'
                           >
                              <SidebarMenuItem className='flex gap-2 w-full'>
                                 <span>candles</span>
                                 <CandlestickChartIcon />
                              </SidebarMenuItem>
                           </Link>
                        </SidebarMenuButton>
                        <Link href={'/admin/categories'} className='flex gap-2'>
                           <div className=''>category</div>
                           <div className=''>icon</div>
                        </Link>
                        <Link href={'/admin/colors'} className='flex gap-2'>
                           <div className=''>category</div>
                           <div className=''>icon</div>
                        </Link>
                        <Link href={'/admin/orders'} className='flex gap-2'>
                           <div className=''>category</div>
                           <div className=''>icon</div>
                        </Link>
                        <Link href={'/admin/users'} className='flex gap-2'>
                           <div className=''>category</div>
                           <div className=''>icon</div>
                        </Link>
                     </SidebarMenu>
                  </SidebarGroupContent>
               </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>footer</SidebarFooter>
         </div>
      </Sidebar>
   )
}

export default AsideAdmin
