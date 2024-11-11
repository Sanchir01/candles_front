'use client'
import dynamic from 'next/dynamic'

const AdminPageMain = dynamic(() => import('~/widgets/admin/main'), {
   ssr: false
})
const AsideAdmin = dynamic(() => import('~/widgets/admin/aside'), {
   ssr: false
})
const AdminPage = () => {
   return (
      <>
         <AdminPageMain />
      </>
   )
}

export default AdminPage
