import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
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
}
const EmblaCarousel = ({ children, loop = false }: SliderPropsType) => {
   const [emblaRef] = useEmblaCarousel({ loop }, [Autoplay()])

   return (
      <div className={st.embla} ref={emblaRef}>
         <div className={st.embla__container}>{children}</div>
      </div>
   )
}
export default EmblaCarousel
