'use client'
import Link from 'next/link'
import { FC } from 'react'
import styles from '~/shared/styles/Hero.module.scss'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HeroSliderContent } from '~/shared/constants/header_content'
import 'swiper/scss'
const HeroSlider: FC = () => (
   <section className={styles.hero}>
      <Swiper
         modules={[Navigation]}
         navigation
         autoplay={{
            delay: 1500
         }}
      >
         {HeroSliderContent.map(content => (
            <SwiperSlide key={content.id} className={styles.hero__slide}>
               <Link href={content.href} className={styles.hero__slide__link}>
                  <p className={styles.hero__slide__title}>{content.title}</p>
                  <span className={styles.hero__slide__subtitle}>
                     {content.subtitle}
                  </span>
               </Link>
            </SwiperSlide>
         ))}
      </Swiper>
   </section>
)
export default HeroSlider
