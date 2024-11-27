import { Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

interface SliderDesktopProps {
   children: React.ReactNode
   pagination?: boolean
   navigation?: boolean
   countSlides?: number
   breakpoints?: {
      [width: number]: {
         slidesPerView: number
         spaceBetween?: number
      }
   }
}

const SliderDesktop = ({
   children,
   pagination = false,
   navigation = false,
   countSlides,
   breakpoints = {
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      480: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 40
      },
      1024: {
         slidesPerView: 3.5,
         spaceBetween: 50
      }
   }
}: SliderDesktopProps) => {
   return (
      <Swiper
         className='h-auto'
         modules={[Navigation, Pagination]}
         breakpoints={breakpoints}
         navigation={navigation}
         slidesPerView={countSlides}
         pagination={pagination ? { clickable: true } : false}
         onSlideChange={() => console.log('slide change')}
         onSwiper={swiper => console.log(swiper)}
      >
         {children}
      </Swiper>
   )
}

export default SliderDesktop
