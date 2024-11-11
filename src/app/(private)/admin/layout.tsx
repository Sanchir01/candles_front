import { Metadata } from 'next'
import { HeaderProfileEnum } from '~/shared/constants/headerprofile'
import st from '~/shared/styles/Admin.module.scss'
import { SidebarProvider, SidebarTrigger } from '~/shared/ui/sidebar'
import AsideAdmin from '~/widgets/admin/aside'
import { Header } from '~/widgets/header'

export const metadata: Metadata = {
   title: 'Mahakala | Admin'
}

export default function RootLayout({
   children
}: {
   children: React.ReactNode
}) {
   return (
      <div className={st.admin}>
         <Header variant={HeaderProfileEnum.PUBLIC} />
         <SidebarProvider>
            <AsideAdmin />
            <SidebarTrigger />
            <div className='flex flex-col h-screen w-screen overflow-auto'>
               {children}
            </div>
         </SidebarProvider>
      </div>
   )
}
