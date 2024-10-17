import { Heart, ShoppingBasket } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import style from '~/shared/styles/Header.module.scss'
import FavoritesLogo from './HeaderFavorites'
import { ShoppingCart } from '~/widgets/cart/Cart'

export const HeaderActions = () => {
   return (
      <>
         <FavoritesLogo />
         <ShoppingCart />
      </>
   )
}
