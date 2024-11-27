import Link from 'next/link'
import { FC } from 'react'
import styles from '~/shared/styles/Home.module.scss'
import 'swiper/css/navigation'
import 'swiper/scss'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HeroSliderContent } from '~/shared/constants/header_content'
import { cn } from '~/shared/lib/utils'
import { Button } from '~/shared/ui'

const HeroSlider: FC = () => (
   <section className={styles.hero}>
      <Swiper
         modules={[Navigation, Autoplay]}
         navigation
         autoplay={{
            delay: 2500
         }}
      >
         {HeroSliderContent.map(content => (
            <SwiperSlide key={content.id} className={styles.hero__slide}>
               <Link
                  href={content.href}
                  className={cn(styles.hero__slide__link, 'text-myWhite')}
               >
                  <h1 className={styles.hero__slide__title}>{content.title}</h1>
                  <span className={styles.hero__slide__subtitle}>
                     {content.subtitle}
                  </span>
                  <div className='mt-5'>
                     <Button className='h-10  min-w-[200px] p-3 text-xl'>
                        {content.buttonText}
                     </Button>
                  </div>
               </Link>
            </SwiperSlide>
         ))}
      </Swiper>
   </section>
)
export default HeroSlider
