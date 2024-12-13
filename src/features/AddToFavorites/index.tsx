'use client'
import { useFavorites } from '~/Providers/store/useFavorites'

import { Heart } from 'lucide-react'
import { useMediaQuery } from '~/shared/hooks/useMediaQuery'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'

import { ProductCardPropsType } from '~/shared/types/Catalog.types'
import { Button } from '~/shared/ui'

export interface IToggleFavoritesFeature
   extends Omit<ProductCardPropsType, 'images' | 'slug'> {
   images: string
   className?: string
}

const AddToFavorites = ({
   id,
   colorId,
   categoryId,
   title,
   price,
   version,
   images,
   className
}: IToggleFavoritesFeature) => {
   const isMedia664 = useMediaQuery('(min-width: 640px)')

   const favorites = useStoreZustand(useFavorites, state => state.favorites)
   const toggleFavorites = useFavorites(state => state.setFavorites)
   const isExistColor = favorites?.find(item => item.colorId === colorId)
   const isExistCategory = favorites?.find(
      item => item.categoryId === categoryId
   )
   const isExistFavorites = favorites?.some(
      favorite =>
         favorite.id === id &&
         favorite.colorId === isExistColor?.colorId &&
         favorite.categoryId === isExistCategory?.categoryId
   )

   const toggle = () => {
      toggleFavorites({
         id,
         colorId,
         images: images,
         title,
         price,
         categoryId,
         version
      })
   }
   return (
      <Button
         className={className}
         aria-label='Add to favorites'
         variant='default'
         onClick={() => toggle()}
         size={isMedia664 ? 'default' : 'icon'}
      >
         <Heart
            size={isMedia664 ? 20 : 15}
            fill={isExistFavorites ? 'black' : 'white'}
         />
      </Button>
   )
}
export default AddToFavorites
