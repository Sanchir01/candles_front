'use client'
import dynamic from 'next/dynamic'
import Form from './ui/Form'
import OndeCandleImageGallery from './ui/OndeCandleImageGallery'
import OneCandleLayout from './ui/OneCandleLayout'

const SimilarCategorySlider = dynamic(
	() => import('./ui/SimilarCategorySlider'),
	{
		ssr: false
	}
)
const SimilarColorSlider = dynamic(() => import('./ui/SimilarColorSlider'), {
	ssr: false
})

type OneCandleType = {
	id: string
	title: string
	slug: string
	price: number
	weight: number
	color_id: string
	category_id: string
	version: number
	images: string[]
}

const OneCandle = ({
	id,
	title,
	slug,
	price,
	color_id,
	category_id,
	version,
	images
}: OneCandleType) => {
	return (
		<OneCandleLayout
			imageGallery={<OndeCandleImageGallery images={images} id={id} />}
			form={
				<Form
					title={title}
					slug={slug}
					price={price}
					color_id={color_id}
					category_id={category_id}
					version={version}
					images={images}
					id={id}
				/>
			}
			similarCategorySlider={<SimilarCategorySlider categoryId={category_id} />}
			similarColorSlider={<SimilarColorSlider colorId={color_id} />}
		/>
	)
}

export default OneCandle
