'use client'
import { HeaderProfileEnum } from '~/shared/constants/header'
import Header from '~/widgets/header'

export default function RootLayout({
   children
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <Header isAuth={HeaderProfileEnum.PUBLIC} />
         <main>{children}</main>
         <div className=''>tes</div>
      </>
   )
}
