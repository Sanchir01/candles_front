'use client'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { useFavorites } from '~/Providers/store/useFavorites'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import { Button } from '~/shared/ui'

const FavoritesLogo = () => {
   const favorites = useStoreZustand(useFavorites, state => state.favorites)
   return (
      <Button variant={'ghost'} size={'icon'}>
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
      </Button>
   )
}

export default FavoritesLogo
