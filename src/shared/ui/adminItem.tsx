import Link from 'next/link'
import { ReactNode } from 'react'

export type AdminItemLine = {
   id: string
   title: string
   href: string
   Delete: ReactNode
}

const AdminItemLine = ({ title, href, Delete }: AdminItemLine) => {
   return (
      <div className='w-full rounded-lg h-12 border border-blue-400 px-5 py-2'>
         <div className='grid grid-cols-4 items-center'>
            <Link href={href}>{title}</Link>
            {Delete}
            <div className=''>test</div>
         </div>
      </div>
   )
}

export default AdminItemLine
