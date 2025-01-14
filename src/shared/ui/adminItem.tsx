import { ReactNode } from 'react'
import { Title } from './title'
import Image from 'next/image'

export type AdminItemLine = {
   title: string
   image?: string
   View: ReactNode
   Delete: ReactNode
   Update: ReactNode
}

const AdminItemLine = ({
   image,
   title,
   Delete,
   View,
   Update
}: AdminItemLine) => {
   return (
      <div className='w-full h-16 border border-blue-400 px-5 flex items-center rounded-lg'>
         <div className='flex justify-between items-center w-full'>
            <div className='flex gap-4'>
               {image && (
                  <Image
                     src={image}
                     alt={title}
                     width={0}
                     height={0}
                     sizes='100vw'
                     style={{ width: '100%', height: 'auto' }}
                  />
               )}
               <Title size='xs' text={title} />
            </div>
            <div className='flex gap-4 items-center'>
               {View}
               {Update}
               {Delete}
            </div>
         </div>
      </div>
   )
}

export default AdminItemLine
