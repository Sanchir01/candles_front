'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import React from 'react'
import { cn } from '~/shared/lib/utils'
import st from '~/shared/styles/Catalog.module.scss'
export interface ICatalogLayout {
   grid?: React.ReactNode
   title?: React.ReactNode
   sorting?: React.ReactNode
   filters?: React.ReactNode
}
const CatalogLayout = ({ grid, title, sorting, filters }: ICatalogLayout) => {
   const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })

   return (
      <div className='flex flex-col '>
         <div className=''>{title}</div>
         <div className='flex justify-between items-center'>
            {filters}
            {sorting}
         </div>
         <div className={cn(st.catalog__content, 'mt-5')} ref={parent}>
            {grid}
         </div>
      </div>
   )
}

export default CatalogLayout
