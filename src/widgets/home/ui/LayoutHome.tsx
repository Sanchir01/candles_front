import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export type HomeLayoutType = {
   heroSlider?: ReactNode
   popularSlider?: ReactNode
   aboutBrand?: ReactNode
   advantages?: ReactNode
   feedbackForm?: ReactNode
}
export const HomeLayout = ({
   heroSlider,
   aboutBrand,
   popularSlider,
   advantages,
   feedbackForm
}: HomeLayoutType) => {
   return (
      <>
         {heroSlider}
         <div className='overflow-hidden'>
            <motion.section
               initial={{ opacity: 0.2, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               className='mt-20'
               animate='visible'
               transition={{ duration: 0.4, delay: 0.1 }}
            >
               {popularSlider}
            </motion.section>
            <motion.section
               initial={{ opacity: 0.2, x: -250 }}
               whileInView={{ opacity: 1, x: 0 }}
               className='mt-20'
               animate='visible'
               transition={{ duration: 0.4, delay: 0.1 }}
            >
               {aboutBrand}
            </motion.section>
            <motion.section
               initial={{ opacity: 0.2, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               className='mt-20'
               animate='visible'
               transition={{ duration: 0.4, delay: 0.1 }}
            >
               {advantages}
            </motion.section>
            <motion.section
               initial={{ opacity: 0.2, x: -250 }}
               whileInView={{ opacity: 1, x: 0 }}
               className='mt-20'
               animate='visible'
               transition={{ duration: 0.4, delay: 0.1 }}
            >
               {feedbackForm}
            </motion.section>
         </div>
      </>
   )
}
