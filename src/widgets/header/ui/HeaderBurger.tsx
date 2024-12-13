'use client'
import { Menu } from 'lucide-react'
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from '~/shared/ui/sheet'
import { ShoppingCart } from '~/widgets/cart/Cart'
import FavoritesLogo from './HeaderFavorites'
import { HeaderLayoutPropsType } from './HeaderLayout'
import { HeaderNav } from './HeaderNav'
export type HeaderBurgerType = {} & Omit<HeaderLayoutPropsType, 'breadcrumbs'>
const HeaderBurger = ({ logo, admin, profile, theme }: HeaderBurgerType) => {
   return (
      <Sheet modal>
         <SheetTrigger asChild>
            <Menu className='cursor-pointer' />
         </SheetTrigger>
         <SheetContent side={'left'} className='flex flex-col justify-between'>
            <SheetHeader>
               <SheetTitle>{logo}</SheetTitle>
            </SheetHeader>
            <div className='flex-1 pt-5'>
               <HeaderNav />
            </div>
            <SheetFooter>
               <div className='flex items-center justify-between'>
                  <SheetClose asChild>{admin}</SheetClose>
                  <SheetClose asChild>
                     <ShoppingCart />
                  </SheetClose>
                  <SheetClose asChild>
                     <FavoritesLogo />
                  </SheetClose>
                  <SheetClose asChild>{profile}</SheetClose>
                  <SheetClose asChild>{theme}</SheetClose>
               </div>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   )
}

export default HeaderBurger
