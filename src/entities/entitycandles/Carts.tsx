import React from 'react'

export const EntityProductCart = ({
   children
}: {
   children: React.ReactNode
}) => {
   return (
      <div className={'max-w-[200px] max-h-[300px]'}>
         <div className='flex flex-col'>{children}</div>
      </div>
   )
}
