import { HeaderProfileEnum } from '~/shared/constants/headerprofile'
import { Header } from '~/widgets/header'

export default function RootLayout({
   children
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <Header variant={HeaderProfileEnum.PUBLIC} />
         <main>{children}</main>
         <div className=''>tes</div>
      </>
   )
}
