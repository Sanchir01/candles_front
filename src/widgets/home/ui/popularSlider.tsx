import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { FC } from 'react'
import { SwiperSlide } from 'swiper/react'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import { Container, Title } from '~/shared/ui'
import ImagesGallery from '~/shared/ui/ImageGallery'
import SliderDesktop from '~/shared/ui/sliders'

const PopularItemsSlider: FC = () => {
   const { data, isLoading, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort: CandlesSortEnum.CreatedAtAsc,
         pageNumber: 1,
         pageSize: 20,
         categoryId: null,
         colorId: null
      })
   })
   return (
      <Container>
         <Title text='Популярные товары' size='lg' />
         <div className='mt-5'>
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
      </Container>
   )
}

export default PopularItemsSlider
