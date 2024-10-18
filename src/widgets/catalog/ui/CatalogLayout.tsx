'use client'
import React, { FC } from 'react'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { useAllCandles } from '~/shared/hooks/useAllCandles'

export interface ICatalogLayout {
   grid?: React.ReactNode
   title?: React.ReactNode
   filters?: React.ReactNode
   sorting?: React.ReactNode
}
const CatalogLayout = ({ grid, title, filters, sorting }: ICatalogLayout) => {
   return (
      <div className='flex flex-col '>
         {title}
         <div className='flex justify-between'>
            {filters}
            {sorting}
         </div>
         {grid}
      </div>
   )
}

export default CatalogLayout
