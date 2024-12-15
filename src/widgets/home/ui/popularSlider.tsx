import { useQuery } from '@tanstack/react-query'
import useEmblaCarousel from 'embla-carousel-react'
import { FC } from 'react'
import { SwiperSlide } from 'swiper/react'
import { SkeletonCart } from '~/entities/entitycandles/ui/SkeletenCart'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import { Container, Title } from '~/shared/ui'
import SliderItem from '~/widgets/catalog/ui/item'

const PopularItemsSlider: FC = () => {
   const { data, isLoading, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort: CandlesSortEnum.CreatedAtAsc,
         categoryId: null,
         colorId: null
      })
   })
   const [emblaRef] = useEmblaCarousel()
   if (isLoading) {
      return Array.from({ length: 8 }).map((_, index) => (
         <SwiperSlide key={index}>
            <SkeletonCart />
         </SwiperSlide>
      ))
   }
   return (
      <Container>
         <Title
            text='Популярные товары'
            size='lg'
            className='text-mySecondary'
         />
         <div className='mt-5'>
            <div className='embla' ref={emblaRef}>
               <div className='embla__container'>
                  {isSuccess && data?.__typename === 'AllCandlesOk' ? (
                     data?.candles?.map(
                        ({
                           id,
                           title,
                           images,
                           price,
                           version,
                           color_id,
                           category_id
                        }) => (
                           <div className='embla__slide ' key={id}>
                              <SliderItem
                                 id={id}
                                 title={title}
                                 images={images}
                                 price={price}
                                 version={version}
                                 color_id={color_id}
                                 category_id={category_id}
                                 focusImage={true}
                              />
                           </div>
                        )
                     )
                  ) : (
                     <></>
                  )}
               </div>
            </div>
         </div>
      </Container>
   )
}

export default PopularItemsSlider
