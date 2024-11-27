'use client'
import { Suspense } from 'react'

import { Metadata } from 'next'
import HeroSlider from '~/shared/ui/slider/heroSlider'
import LoadingMainPage from './loading'
export const metaDta: Metadata = {
   title: 'Home',
   keywords: 'canlde, candles, Elista shop, свечи, свечи на заказ'
}

export default function Home() {
   return (
      <Suspense fallback={<LoadingMainPage />}>
         <HeroSlider />
      </Suspense>
   )
}
