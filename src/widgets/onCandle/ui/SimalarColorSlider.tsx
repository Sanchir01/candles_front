'use client'
import { useQuery } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'

const SimilarColorSlider = ({ colorId }: { colorId: string }) => {
   const { data, isLoading, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort: CandlesSortEnum.PriceAsc,
         colorId
      })
   })
   return (
      <Swiper
         spaceBetween={50}
         slidesPerView={3}
         onSlideChange={() => console.log('slide change')}
         onSwiper={swiper => console.log(swiper)}
      >
         {isLoading
            ? 'Loading'
            : isSuccess && data?.__typename === 'AllCandlesOk'
              ? data?.candles?.map(candle => (
                   <SwiperSlide key={candle.id}>{candle.title}</SwiperSlide>
                ))
              : 'Error'}
      </Swiper>
   )
}

export default SimilarColorSlider
