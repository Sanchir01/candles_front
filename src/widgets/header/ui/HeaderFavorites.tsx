'use client'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { useFavorites } from '~/Providers/store/useFavorites'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'

const FavoritesLogo = () => {
   const favorites = useStoreZustand(useFavorites, state => state.favorites)
   return (
      <Link className='cursor-pointer relative' href={'/favorites'}>
         <Heart />
         {favorites?.length === 0 ? (
            <></>
         ) : (
            <span className='absolute top-1 left-[9px] text-[10px]'>
               {favorites?.length}
            </span>
         )}
      </Link>
   )
}

export default FavoritesLogo
