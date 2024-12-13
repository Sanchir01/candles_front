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
   pagination?: React.ReactNode
}
const CatalogLayout = ({
   grid,
   title,
   sorting,
   filters,
   pagination
}: ICatalogLayout) => {
   const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })
   return (
      <>
         {title}
         <div className={st.catalog__filters}>
            {filters}
            {sorting}
         </div>
         <div className={cn(st.catalog__content, 'mt-5')} ref={parent}>
            {grid}
         </div>
         <div className='mt-5'>{pagination}</div>
      </>
   )
}

export default CatalogLayout
