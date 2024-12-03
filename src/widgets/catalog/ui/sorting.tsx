'use client'
import React, { useRef } from 'react'
import { useFilters } from '~/Providers/store/useFilters'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import {
   Select,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
   SelectContent
} from '~/shared/ui/select'
const dataSorting = [
   { value: CandlesSortEnum.CreatedAtAsc, label: 'По дате' },
   { value: CandlesSortEnum.PriceAsc, label: 'По возростанию цены' },
   { value: CandlesSortEnum.PriceDesc, label: 'По убыванию цены' }
]
const Sorting = () => {
   const setSorting = useFilters(state => state.changeSorting)
   const ref = useRef(null)
   return (
      <Select onValueChange={value => setSorting(value as CandlesSortEnum)}>
         <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Сортировать' />
         </SelectTrigger>
         <SelectContent
            ref={ref => {
               if (!ref) return
               ref.ontouchstart = e => {
                  e.preventDefault()
               }
            }}
         >
            <SelectGroup>
               {dataSorting.map(item => (
                  <SelectItem key={item.value} value={item.value}>
                     {item.label}
                  </SelectItem>
               ))}
            </SelectGroup>
         </SelectContent>
      </Select>
   )
}

export default Sorting
