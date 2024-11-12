import { FC } from 'react'
import { Skeleton } from '~/shared/ui'
import AdminItemLine from '~/shared/ui/adminItem'

const page: FC = () => {
   return (
      <div className='flex flex-1 flex-col gap-4 p-4'>
         <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <Skeleton className='aspect-video rounded-xl' />
            <Skeleton className='aspect-video rounded-xl' />
            <Skeleton className='aspect-video rounded-xl' />
         </div>
         <AdminItemLine
            id={'sadad'}
            title={'sadsad'}
            href={'/admin'}
            Delete={<div>tes</div>}
         />
         <AdminItemLine
            id={'sadad'}
            title={'sadsad'}
            href={'/admin'}
            Delete={<div>tes</div>}
         />
         <AdminItemLine
            id={'sadad'}
            title={'sadsad'}
            href={'/admin'}
            Delete={<div>tes</div>}
         />
         <AdminItemLine
            id={'sadad'}
            title={'sadsad'}
            href={'/admin'}
            Delete={<div>tes</div>}
         />
         <AdminItemLine
            id={'sadad'}
            title={'sadsad'}
            href={'/admin'}
            Delete={<div>tes</div>}
         />
         <AdminItemLine
            id={'sadad'}
            title={'sadsad'}
            href={'/admin'}
            Delete={<div>tes</div>}
         />
      </div>
   )
}

export default page
