import Link from 'next/link'
import { FC } from 'react'
import styles from '~/shared/styles/home/hero.module.scss'
import { HeroSliderContent } from '~/shared/constants/header_content'
import { cn } from '~/shared/lib/utils'
import { Button } from '~/shared/ui'
import EmblaCarousel from '~/shared/ui/sliders/emblaSlider'
const HeroSlider: FC = () => (
   <section className={styles.hero}>
      <EmblaCarousel>
         {HeroSliderContent.map(content => (
            <div
               key={content.id}
               className={cn(styles.hero__slide, 'min-w-[100%]')}
            >
               <Link
                  href={content.href}
                  className={cn(
                     styles.hero__slide__link,
                     'text-myWhite line-clamp-2'
                  )}
               >
                  <h1 className={styles.hero__slide__title}>{content.title}</h1>
                  <span className={styles.hero__slide__subtitle}>
                     {content.subtitle}
                  </span>
                  <div className='mt-5'>
                     <Button className={styles.hero__button}>
                        {content.buttonText}
                     </Button>
                  </div>
               </Link>
            </div>
         ))}
      </EmblaCarousel>
   </section>
)
export default HeroSlider
