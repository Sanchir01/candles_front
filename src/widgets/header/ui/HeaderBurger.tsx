'use client'
import { Menu } from 'lucide-react'
import { ReactNode } from 'react'
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from '~/shared/ui/sheet'

import { HeaderLayoutPropsType } from './HeaderLayout'
import { HeaderNav } from './HeaderNav'
export type HeaderBurgerType = { actions: ReactNode } & Omit<
   HeaderLayoutPropsType,
   'breadcrumbs'
>
const HeaderBurger = ({
   logo,
   admin,
   actions,
   profile,
   theme
}: HeaderBurgerType) => {
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
               <SheetClose className='w-full' asChild>
                  <div className='flex items-center justify-between '>
                     {admin}
                     {actions}
                     {profile}
                     {theme}
                  </div>
               </SheetClose>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   )
}

export default HeaderBurger
