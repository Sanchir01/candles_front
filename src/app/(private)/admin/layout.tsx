'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import { HeaderProfileEnum } from '~/shared/constants/header'
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
   return (
      <SidebarProvider>
         <AppSidebar />
         <SidebarInset>
            <HeaderAdmin isAuth={HeaderProfileEnum.PRIVATE} />
            {children}
         </SidebarInset>
      </SidebarProvider>
   )
}
