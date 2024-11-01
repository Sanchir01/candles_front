'use client'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

// export const metadata: Metadata = {
//   title: "Mahakala | Admin Panel",
//   robots: {
//     follow: false,
//   },
// };

const AdminApp = dynamic(() => import('~/widgets/admin'), {
   ssr: false
})

const AdminPage: NextPage = () => {
   return <AdminApp />
}

export default AdminPage
