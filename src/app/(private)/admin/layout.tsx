import { Metadata } from 'next'
import { HeaderProfileEnum } from '~/shared/constants/headerprofile'
import st from '~/shared/styles/Admin.module.scss'
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
         <aside>aside</aside>
         <div className=''>
            <div className=''>{children}</div>
         </div>
      </div>
   )
}
