import React from 'react'
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
