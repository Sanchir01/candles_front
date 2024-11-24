'use client'
import { useQuery } from '@tanstack/react-query'
import { SwiperSlide } from 'swiper/react'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import ImagesGallery from '~/shared/ui/ImageGallery'
import SliderDesktop from '~/shared/ui/slider'
import 'swiper/scss'
import Link from 'next/link'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import { Title } from '~/shared/ui'

const SimilarColorSlider = ({ categoryId }: { categoryId: string }) => {
   const { data, isLoading, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort: CandlesSortEnum.PriceAsc,
         categoryId,
         colorId: null
      })
   })

   return (
      <div className=''>
         {isSuccess && data?.__typename === 'AllCandlesOk' && (
            <Title text={'Товары с похожей категорией'} size='lg' />
         )}
         <div className='w-full overflow-hidden pt-5'>
            <SliderDesktop navigation={false} pagination={false}>
               {isLoading ? (
                  Array.from({ length: 8 }).map((_, index) => (
                     <SwiperSlide key={index}>
                        <SkeletonCart />
                     </SwiperSlide>
                  ))
               ) : isSuccess && data?.__typename === 'AllCandlesOk' ? (
                  data?.candles?.map(candle => (
                     <SwiperSlide key={candle.id}>
                        <Link href={`/catalog/${candle.id}`}>
                           <ImagesGallery images={candle.images} focusImage />
                        </Link>
                     </SwiperSlide>
                  ))
               ) : (
                  <></>
               )}
            </SliderDesktop>
         </div>
      </div>
   )
}

export default SimilarColorSlider
