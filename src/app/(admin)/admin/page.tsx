import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { FC } from 'react'

const AdminApp = dynamic(() => import('~/widgets/admin'), { ssr: false })

const AdminPage: NextPage = () => {
   return <AdminApp />
}

export default AdminPage
