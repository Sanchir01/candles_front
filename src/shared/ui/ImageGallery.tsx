'use client'
import Image from 'next/image'
import { FC, useState } from 'react'
import { useMediaQuery } from '~/shared/hooks/useMediaQuery'
import { cn } from '~/shared/lib/utils'
const ImagesGallery: FC<{ images: string[]; focusImage?: boolean }> = ({
   images,
   focusImage = false
}) => {
   const [indexImages, setIndexImages] = useState(0)
   const isMedia992 = useMediaQuery('(min-width:992px)')
   return isMedia992 && focusImage ? (
      <Image
         onMouseMove={() => setIndexImages(1)}
         onMouseLeave={() => setIndexImages(0)}
         className={cn('h-[200px] w-full transition')}
         src={images[indexImages]}
         alt={images[indexImages]}
         width={0}
         height={0}
         sizes='100vw'
         priority={true}
         objectFit='cover'
      />
   ) : (
      <Image
         className={cn('h-[200px] w-full transition')}
         src={images[0]}
         alt={images[0]}
         width={400}
         height={400}
         priority={true}
      />
   )
}

export default ImagesGallery
