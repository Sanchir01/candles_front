'use client'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HeaderProfileEnum, HeaderVariant } from '~/shared/constants/header'
import { Title } from '~/shared/ui'
import { SidebarInset, SidebarProvider } from '~/shared/ui/sidebar'

const AppSidebar = dynamic(() => import('~/widgets/sidebar'), {
   ssr: false
})
const HeaderAdmin = dynamic(() => import('~/widgets/header'), {
   ssr: false
})

export default function RootLayout({
   children
}: {
   children: React.ReactNode
}) {
   const path = usePathname()
   return (
      <SidebarProvider>
         <AppSidebar />
         <SidebarInset>
            <HeaderAdmin
               isAuth={HeaderProfileEnum.PRIVATE}
               variant={HeaderVariant.ADMIN}
            />
            <Title
               text={path === '/admin' ? '' : path.split('/').pop() || ''}
               size='lg'
               className='px-5'
            />
            {children}
         </SidebarInset>
      </SidebarProvider>
   )
}
