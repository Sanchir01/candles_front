import { ReactNode } from 'react'
import HeaderBreadcrumbs from '~/widgets/header/ui/HeaderBreadcrumbs'
type OneCandleLayouType = {
	imageGallery?: ReactNode
	form?: ReactNode
	similarCategorySlider?: ReactNode
	similarColorSlider?: ReactNode
}

const OneCandleLayout = ({
	imageGallery,
	form,
	similarCategorySlider,
	similarColorSlider
}: OneCandleLayouType) => {
	return (
		<>
			<div className='flex gap-10'>
				<div className='flex flex-col gap-2'>
					<HeaderBreadcrumbs />
					{imageGallery}
				</div>
				{form}
			</div>
			{similarCategorySlider}
			{similarColorSlider}
		</>
	)
}

export default OneCandleLayout
