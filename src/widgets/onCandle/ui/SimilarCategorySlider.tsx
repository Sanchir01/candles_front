'use client'
import { useQuery } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import 'swiper/scss'
const SimilarColorSlider = ({ categoryId }: { categoryId: string }) => {
   const { data, isLoading, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort: CandlesSortEnum.PriceAsc,
         categoryId
      })
   })
   return (
      <Swiper
         spaceBetween={50}
         slidesPerView={3.5}
         onSlideChange={() => console.log('slide change')}
         onSwiper={swiper => console.log(swiper)}
      >
         <SwiperSlide>1</SwiperSlide>
         <SwiperSlide>2</SwiperSlide>
         <SwiperSlide>41243123</SwiperSlide>
         <SwiperSlide>41243123</SwiperSlide>
         <SwiperSlide>41243123</SwiperSlide>
         <SwiperSlide>41243123</SwiperSlide>
         <SwiperSlide>41243123</SwiperSlide>
      </Swiper>
   )
}

export default SimilarColorSlider
