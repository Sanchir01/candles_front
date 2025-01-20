'use client'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import SliderItem from '~/widgets/catalog/ui/item'
import EmblaCarousel from '~/shared/ui/sliders/emblaSlider'
import st from '~/shared/styles/slider/index.module.scss'
const RecommendedSlider: FC = () => {
	const { data, isLoading } = useQuery({
		...candlesService.AllCandlesQueryOptions({
			sort: CandlesSortEnum.CreatedAtAsc,
			categoryId: null,
			colorId: null
		})
	})
	return isLoading ? (
		<></>
	) : (
		data && (
			<EmblaCarousel>
				{data.__typename === 'AllCandlesOk' ? (
					data.candles.map(
						({ id, title, images, price, version, color_id, category_id }) => (
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
		)
	)
}

export default RecommendedSlider
