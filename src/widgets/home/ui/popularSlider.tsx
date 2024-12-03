import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { SwiperSlide } from 'swiper/react'
import { SkeletonCart } from '~/entities/entitycandles/ui/SkeletenCart'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import { Container, Title } from '~/shared/ui'
import SliderDesktop from '~/shared/ui/sliders'
import GridItem from '~/widgets/catalog/ui/item'

const PopularItemsSlider: FC = () => {
   const { data, isLoading, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort: CandlesSortEnum.CreatedAtAsc,
         categoryId: null,
         colorId: null
      })
   })
   return (
      <Container>
         <Title
            text='Популярные товары'
            size='lg'
            className='text-mySecondary'
         />
         <div className='mt-5'>
            <SliderDesktop countSlides={5.5}>
               {isLoading ? (
                  Array.from({ length: 8 }).map((_, index) => (
                     <SwiperSlide key={index}>
                        <SkeletonCart />
                     </SwiperSlide>
                  ))
               ) : isSuccess && data?.__typename === 'AllCandlesOk' ? (
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
                        <SwiperSlide key={id}>
                           <GridItem
                              id={id}
                              title={title}
                              images={images}
                              price={price}
                              version={version}
                              color_id={color_id}
                              category_id={category_id}
                              focusImage={true}
                           />
                        </SwiperSlide>
                     )
                  )
               ) : (
                  <></>
               )}
            </SliderDesktop>
         </div>
      </Container>
   )
}

export default PopularItemsSlider
