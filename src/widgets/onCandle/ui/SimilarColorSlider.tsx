'use client'
import { useQuery } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import { Title } from '~/shared/ui'
import ImagesGallery from '~/shared/ui/ImageGallery'
import SliderDesktop from '~/shared/ui/slider'

const SimilarColorSlider = ({ colorId }: { colorId: string }) => {
   const { data, isLoading, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort: CandlesSortEnum.PriceAsc,
         colorId
      })
   })
   return (
      <div className=''>
         {isSuccess && data?.__typename === 'AllCandlesOk' && (
            <Title text={'Товары c похожим цветом'} size='lg' />
         )}
         <div className='w-full overflow-hidden pt-5'>
            <SliderDesktop navigation={false} pagination={false}>
               {isLoading
                  ? Array.from({ length: 20 }).map((_, index) => (
                       <SwiperSlide key={index}>
                          <SkeletonCart />
                       </SwiperSlide>
                    ))
                  : isSuccess && data?.__typename === 'AllCandlesOk'
                    ? data?.candles?.map(candle => (
                         <SwiperSlide key={candle.id}>
                            <ImagesGallery images={candle.images} focusImage />
                         </SwiperSlide>
                      ))
                    : null}
            </SliderDesktop>
         </div>
      </div>
   )
}

export default SimilarColorSlider
