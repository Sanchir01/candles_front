'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useFavorites } from '~/Providers/store/useFavorites'
import { SkeletonCart } from '~/entities/entitycandles/ui/SkeletenCart'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import st from '~/shared/styles/Catalog.module.scss'
import { Button, Container } from '~/shared/ui'

const GridItem = dynamic(() => import('~/widgets/catalog/ui/item'), {
	ssr: false
})

export default function FavoritesPage() {
	const candlesFavourites = useStoreZustand(
		useFavorites,
		state => state.favorites
	)
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })

	return candlesFavourites?.length === 0 ? (
		<div className='flex flex-col gap-5 items-center justify-center h-[100dvh]'>
			<h1 className='text-2xl '>список избранного пуст</h1>
			<Link href={'/catalog'}>
				<Button>В каталог</Button>
			</Link>
		</div>
	) : (
		<div className='mt-5'>
			<Container>
				<div className={st.catalog__content} ref={parent}>
					{candlesFavourites !== undefined
						? candlesFavourites?.map(
								({ title, images, id, price, colorId, categoryId, version }) => (
									<GridItem
										focusImage={false}
										key={id}
										id={id}
										title={title}
										images={[images]}
										price={price}
										version={version}
										color_id={colorId}
										category_id={categoryId}
									/>
								)
							)
						: [...Array(10)].map((_, i) => <SkeletonCart key={i} />)}
				</div>
			</Container>
		</div>
	)
}
