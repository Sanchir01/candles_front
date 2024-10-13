import { Header } from '~/widgets/header'

export default function RootLayout({
   children
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <Header />
         <main>{children}</main>
         <div className=''>tes</div>
      </>
   )
}
