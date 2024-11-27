'use client'
import { Suspense } from 'react'

import { Metadata } from 'next'
import { useLazyComponent } from '~/shared/hooks/useLazyComponent'
import { Container, Skeleton } from '~/shared/ui'
import { SliderHero } from '~/widgets/home'
import LoadingMainPage from './loading'

export const metaDta: Metadata = {
   title: 'Home',
   keywords: 'canlde, candles, Elista shop, свечи, свечи на заказ'
}

const PopularSlider = () => import('~/widgets/home/ui/popularSlider')
const HeroSlider = () => import('~/widgets/home/ui/heroSlider')
const HeroSliderTest = () => import('~/widgets/home/ui/heroSlider')
export default function Home() {
   const [LazySlider, refLazySlider] = useLazyComponent(PopularSlider)
   const [VeLazySlider, ref] = useLazyComponent(HeroSlider)
   const [VeLazySliderTest, reftest] = useLazyComponent(HeroSliderTest)
   return (
      <>
         <Suspense fallback={<LoadingMainPage />}>
            <SliderHero />
         </Suspense>
         <div className='mt-10' ref={refLazySlider}>
            <Suspense
               fallback={
                  <Container>
                     <div className='grid grid-cols-4 '>
                        {Array.from({ length: 8 }).map((_, i) => (
                           <Skeleton key={i} className='h-[300px] w-[300px]' />
                        ))}
                     </div>
                  </Container>
               }
            >
               {LazySlider && <LazySlider />}
            </Suspense>
         </div>
         <div className='mt-10' ref={ref}>
            <Suspense fallback={<LoadingMainPage />}>
               {VeLazySlider && <VeLazySlider />}
            </Suspense>
         </div>
         <div className='mt-10' ref={reftest}>
            <Suspense fallback={<LoadingMainPage />}>
               {VeLazySliderTest && <VeLazySliderTest />}
            </Suspense>
         </div>
      </>
   )
}
