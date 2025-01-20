import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '~/shared/lib/utils'
import st from '~/shared/styles/slider/index.module.scss'
export type SliderPropsType = {
	children: React.ReactNode
	pagination?: boolean
	navigation?: boolean
	countSlides?: number
	loop?: boolean
	breakpoints?: {
		[width: number]: {
			slidesPerView: number
			spaceBetween?: number
		}
	}
	className?: string
}
const EmblaCarousel = ({
	children,
	className,
	loop = false
}: SliderPropsType) => {
	const [emblaRef] = useEmblaCarousel({ loop }, [Autoplay()])

	return (
		<div className={st.embla} ref={emblaRef}>
			<div className={cn(st.embla__container, className)}>{children}</div>
		</div>
	)
}
export default EmblaCarousel
