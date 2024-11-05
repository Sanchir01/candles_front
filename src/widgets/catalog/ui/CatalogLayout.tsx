'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import React from 'react'
import st from '~/shared/styles/Catalog.module.scss'
export interface ICatalogLayout {
   grid?: React.ReactNode
   title?: React.ReactNode
   sorting?: React.ReactNode
}
const CatalogLayout = ({ grid, title, sorting }: ICatalogLayout) => {
   const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })
   return (
      <div className='flex flex-col '>
         {title}
         <div className='flex justify-between'>{sorting}</div>
         <div className={st.catalog__content} ref={parent}>
            {grid}
         </div>
      </div>
   )
}

export default CatalogLayout