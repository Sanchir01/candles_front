import { Metadata } from 'next'
import { Suspense } from 'react'
import { HomeContentComponent } from '~/widgets/home'
import LoadingMainPage from './loading'
export const metadata: Metadata = {
   title: 'Home',
   keywords: 'canlde, candles, Elista shop, свечи, свечи на заказ'
}

export default function Home() {
   return (
      <Suspense fallback={<LoadingMainPage />}>
         <HomeContentComponent />
      </Suspense>
   )
}
