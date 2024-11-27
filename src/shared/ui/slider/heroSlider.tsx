'use client'
import Image from 'next/image'
import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'
import bgCandle1 from '~/shared/public/images/bgCandle1.webp'
import bgCandle2 from '~/shared/public/images/bgCandle2.webp'
import bgCandle3 from '~/shared/public/images/bgCandle3.webp'
import styles from '~/shared/styles/NotFound.module.scss'
import SliderDesktop from '~/shared/ui/slider'
const HeroSlider = () => {
   return (
      <section className={styles.hero}>
         <SliderDesktop countSlides={1}>
            <SwiperSlide>
               <Link href={'/catalog'} className='min-h-[100dvh]'>
                  <Image
                     src={bgCandle1}
                     width={0}
                     height={0}
                     alt={'bgimage'}
                     sizes='80vw'
                     priority={true}
                     className='h-auto'
                  />
                  <div className=''>перейти в каталог</div>
               </Link>
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  src={bgCandle2}
                  width={0}
                  height={0}
                  alt={'bgimage'}
                  sizes='80vw'
                  priority={true}
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  src={bgCandle3}
                  width={0}
                  height={0}
                  alt={'bgimage'}
                  sizes='80vw'
                  priority={true}
               />
            </SwiperSlide>
         </SliderDesktop>
      </section>
   )
}

export default HeroSlider
