import Link from 'next/link'
import { ReactNode } from 'react'
import { Title } from './title'

export type AdminItemLine = {
   id: string
   title: string
   href: string
   Delete: ReactNode
}

const AdminItemLine = ({ title, href, Delete }: AdminItemLine) => {
   return (
      <div className='w-full h-16 border border-blue-400 px-5 flex items-center rounded-lg'>
         <div className='grid grid-cols-4 items-center w-full'>
            <Link href={href}>
               <Title size='xs' text={title} />
            </Link>
            {Delete}
            <div>test</div>
         </div>
      </div>
   )
}

export default AdminItemLine
