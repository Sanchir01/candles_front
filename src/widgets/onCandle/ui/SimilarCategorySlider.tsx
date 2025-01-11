'use client'
import { useQuery } from '@tanstack/react-query'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import { SkeletonCart } from '~/entities/entitycandles/ui/SkeletenCart'
import st from '~/shared/styles/slider/index.module.scss'
import { Title } from '~/shared/ui'
import EmblaCarousel from '~/shared/ui/sliders/emblaSlider'
import SliderItem from '~/widgets/catalog/ui/item'
import styles from '~/shared/styles/oneCandle/index.module.scss'

const SimilarColorSlider = ({ categoryId }: { categoryId: string }) => {
   const { data, isLoading, isSuccess } = useQuery({
      ...candlesService.AllCandlesQueryOptions({
         sort: CandlesSortEnum.PriceAsc,
         categoryId,
         colorId: null
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
      <div className='mt-10'>
         {isSuccess && data?.__typename === 'AllCandlesOk' && (
            <Title
               className={styles.candle__title}
               text={'Товары с похожей категорией'}
               size='lg'
            />
         )}
         <div className='w-full pt-5'>
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
