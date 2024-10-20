'use client'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { EntityProductCart } from '~/entities/entitycandles/Carts'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import { AddToCart } from '~/features/AddToCart/AddToItemCart'
import { AddToFavorites } from '~/features/AddToFavorites/AddTofavorites'
import { candlesService } from '~/shared/service/candles'
import { AllCandlesQuery, CandlesSortEnum } from '../graphql/gql/graphql'
export interface IAllCandles {
   sort: CandlesSortEnum
   initialdata: AllCandlesQuery
}
export const useAllCandles = ({ sort, initialdata }: IAllCandles) => {
   const { data, isPending, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({ sort, initialdata })
   })

   return { data, isPending, isSuccess }
}
