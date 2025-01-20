'use client'
import { Heart } from 'lucide-react'
import { useFavorites } from '~/Providers/store/useFavorites'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import { ButtonLink } from '~/shared/ui'

const FavoritesLogo = () => {
	const favorites = useStoreZustand(useFavorites, state => state.favorites)
	return (
		<ButtonLink
			className='cursor-pointer relative'
			href={'/favorites'}
			variant={'ghost'}
		>
			<Heart />
			{favorites?.length === 0 ? (
				<></>
			) : (
				<span className='absolute top-[9px] left-6 text-[10px]'>
					{favorites?.length}
				</span>
			)}
		</ButtonLink>
	)
}

export default FavoritesLogo
