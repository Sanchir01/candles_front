import Image from 'next/image'
import React from 'react'
import EmblaCarousel from '~/shared/ui/sliders/emblaSlider'

import st from '~/shared/styles/slider/index.module.scss'
const ProductsSlider = ({ images }: { images: string[] }) => {
   return (
      <div className='md:hidden px-0'>
         <div className='w-full'>
            <EmblaCarousel className='gap-5'>
               {images.map((item, i) => (
                  <div className={st.embla__slide} key={i}>
                     <Image
                        src={item}
                        alt={item}
                        width={0}
                        height={0}
                        sizes='70vw'
                        style={{ width: '100%', height: 'auto' }}
                     />
                  </div>
               ))}
            </EmblaCarousel>
         </div>
      </div>
   )
}

export default ProductsSlider
