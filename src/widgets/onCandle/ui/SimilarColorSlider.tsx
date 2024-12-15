'use client'
import { useQuery } from '@tanstack/react-query'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import { Title } from '~/shared/ui'
import 'swiper/css'
import { SkeletonCart } from '~/entities/entitycandles/ui/SkeletenCart'
import st from '~/shared/styles/slider/index.module.scss'
import EmblaCarousel from '~/shared/ui/sliders/emblaSlider'
import SliderItem from '~/widgets/catalog/ui/item'

const SimilarColorSlider = ({ colorId }: { colorId: string }) => {
   const { data, isLoading, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort: CandlesSortEnum.PriceAsc,
         colorId,
         categoryId: null
      })
   })
   if (isLoading) {
      return (
         <EmblaCarousel>
            {Array.from({ length: 8 }).map((_, index) => (
               <div className={st.embla__slide} key={index}>
                  <SkeletonCart />
               </div>
            ))}
         </EmblaCarousel>
      )
   }
   return (
      <div className=''>
         {isSuccess && data?.__typename === 'AllCandlesOk' && (
            <Title text={'Товары c похожим цветом'} size='lg' />
         )}
         <div className='w-full  py-5'>
            <EmblaCarousel>
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
                        <div className={st.embla__slide} key={id}>
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
            </EmblaCarousel>
         </div>
      </div>
   )
}

export default SimilarColorSlider
