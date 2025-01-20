import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { SkeletonCart } from '~/entities/entitycandles/ui/SkeletenCart'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import st from '~/shared/styles/slider/index.module.scss'
import { Container, Title } from '~/shared/ui'
import EmblaCarousel from '~/shared/ui/sliders/emblaSlider'
import SliderItem from '~/widgets/catalog/ui/item'

const PopularItemsSlider: FC = () => {
	const { data, isLoading, isSuccess } = useQuery({
		...candlesService.AllCandlesQueryOptions({
			sort: CandlesSortEnum.CreatedAtAsc,
			categoryId: null,
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
			<Container>
				<Title
					text='Популярные товары'
					size='lg'
					className='text-mySecondary'
				/>
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
			</Container>
		</div>
	)
}

export default PopularItemsSlider
