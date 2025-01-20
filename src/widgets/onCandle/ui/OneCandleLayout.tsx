import { ReactNode } from 'react'
import HeaderBreadcrumbs from '~/widgets/header/ui/HeaderBreadcrumbs'
type OneCandleLayouType = {
	imageGallery?: ReactNode
	form?: ReactNode
	similarCategorySlider?: ReactNode
	similarColorSlider?: ReactNode
	productsSlider?: ReactNode
}

const OneCandleLayout = ({
	imageGallery,
	form,
	similarCategorySlider,
	similarColorSlider,
	productsSlider
}: OneCandleLayouType) => {
	return (
		<>
			<div className='flex gap-10 max-[998px]:flex-col'>
				<div className='flex flex-col gap-2'>
					<HeaderBreadcrumbs />
					{imageGallery}
					{productsSlider}
				</div>
				{form}
			</div>
			{similarCategorySlider}
			{similarColorSlider}
		</>
	)
}

export default OneCandleLayout
