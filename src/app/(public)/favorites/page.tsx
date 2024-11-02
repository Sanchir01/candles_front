'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import Image from 'next/image'
import Link from 'next/link'
import { useFavorites } from '~/Providers/store/useFavorites'
import { EntityProductCart } from '~/entities/entitycandles/Carts'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import { AddToCart } from '~/features/AddToCart'
import { AddToFavorites } from '~/features/AddToFavorites'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import st from '~/shared/styles/Catalog.module.scss'
import { Button } from '~/shared/ui'

export default function FavoritesPage() {
   const candlesFavourites = useStoreZustand(
      useFavorites,
      state => state.favorites
   )
   const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })

   return candlesFavourites?.length === 0 ? (
      <div className='flex flex-col gap-5 items-center justify-center h-[100dvh]'>
         <h1 className='text-2xl '>корзина пуста</h1>
         <Link href={'/catalog'}>
            <Button>В каталог</Button>
         </Link>
      </div>
   ) : (
      <div className={st.catalog__content} ref={parent}>
         {candlesFavourites !== undefined
            ? candlesFavourites?.map(
                 ({
                    title,
                    images,
                    id,
                    slug,
                    price,
                    colorId,
                    categoryId,
                    version
                 }) => (
                    <EntityProductCart key={id}>
                       <Link href={`/catalog/${id}`}>
                          <Image
                             src={images}
                             alt={title}
                             width={300}
                             height={500}
                          />
                       </Link>
                       <div className='flex flex-col px-2'>
                          <h5>{title}</h5>
                          <div className='flex justify-between gap-2 '>
                             <AddToCart
                                text={'добавить в корзину'}
                                images={images}
                                quantity={1}
                                title={title}
                                id={id}
                                slug={slug}
                                price={price}
                                version={version}
                                colorId={colorId}
                                categoryId={categoryId}
                             />
                             <AddToFavorites
                                images={[images]}
                                title={title}
                                id={id}
                                slug={slug}
                                price={price}
                                version={version}
                                colorId={colorId}
                                categoryId={categoryId}
                             />
                          </div>
                       </div>
                    </EntityProductCart>
                 )
              )
            : [...Array(10)].map((_, i) => <SkeletonCart key={i} />)}
      </div>
   )
}
