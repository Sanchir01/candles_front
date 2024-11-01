import React from 'react'

export const EntityProductCart = ({
   children
}: {
   children: React.ReactNode
}) => {
   return (
      <article className={'w-[250px] h-auto border border-black'}>
         <div className='flex flex-col'>{children}</div>
      </article>
   )
}
