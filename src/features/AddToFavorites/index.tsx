'use client'
import { useFavorites } from '~/Providers/store/useFavorites'

import { Heart } from 'lucide-react'
import { useMediaQuery } from '~/shared/hooks/useMediaQuery'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'

import { ProductCardPropsType } from '~/shared/types/Catalog.types'
import { Button } from '~/shared/ui'

export interface IToggleFavoritesFeature extends ProductCardPropsType {}

const AddToFavorites = ({
   id,
   slug,
   colorId,
   categoryId,
   title,
   price,
   version,
   images
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
         images: images[0],
         title,
         price,
         slug,
         categoryId,
         version
      })
   }
   return (
      <Button
         aria-label='Add to favorites'
         variant='secondary'
         onClick={() => toggle()}
         size='default'
      >
         <Heart
            size={isMedia664 ? 20 : 15}
            fill={isExistFavorites ? 'black' : 'white'}
         />
      </Button>
   )
}
export default AddToFavorites
