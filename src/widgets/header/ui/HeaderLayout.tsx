import { Home } from 'lucide-react'
import Link from 'next/link'
import type React from 'react'

import { HeaderVariant } from '~/shared/constants/header'
import style from '~/shared/styles/Header.module.scss'
import { Button } from '~/shared/ui'
import { Separator } from '~/shared/ui/separator'
import { SidebarTrigger } from '~/shared/ui/sidebar'
import { ShoppingCart } from '~/widgets/cart/Cart'
import HeaderBurger from './HeaderBurger'
import FavoritesLogo from './HeaderFavorites'
export type HeaderLayoutPropsType = {
   nav?: React.ReactNode
   logo?: React.ReactNode
   profile?: React.ReactNode
   admin?: React.ReactNode
   theme?: React.ReactNode
   variant?: HeaderVariant
   breadcrumbs?: React.ReactNode
}

export const HeaderLayout = ({
   nav,
   logo,
   profile,
   admin,
   variant,
   theme,
   breadcrumbs
}: HeaderLayoutPropsType) => {
   if (variant === HeaderVariant.ADMIN) {
      return (
         <header className={style.header}>
            <div className='flex px-4 items-center justify-between'>
               <div className='flex items-center'>
                  <SidebarTrigger className='-ml-1' />
                  <Separator orientation='vertical' className='mr-2 h-4' />
                  {breadcrumbs}
               </div>
               <div className='flex gap-3 items-center'>
                  {theme}
                  {profile}
                  <Button variant='ghost' size='icon'>
                     <Link href={'/'}>
                        <Home />
                     </Link>
                  </Button>
               </div>
            </div>
         </header>
      )
   }
   return (
      <header className={style.header}>
         <div className='container'>
            <div className={style.header_wrapper}>
               <div className={'max-[998px]:hidden'}>{logo}</div>
               <nav className={'max-[998px]:hidden'}>{nav}</nav>
               <div className='max-[998px]:hidden flex gap-2 items-center'>
                  <>
                     <FavoritesLogo />
                     <ShoppingCart />
                  </>
                  {profile}
                  {theme}
                  {admin}
               </div>
               <div className='min-[999px]:hidden'>
                  <HeaderBurger
                     logo={logo}
                     nav={nav}
                     actions={
                        <>
                           <FavoritesLogo />
                           <ShoppingCart />
                        </>
                     }
                     admin={admin}
                     theme={theme}
                     profile={profile}
                  />
               </div>
               <div className='min-[999px]:hidden'>
                  <ShoppingCart />
               </div>
            </div>
         </div>
      </header>
   )
}
