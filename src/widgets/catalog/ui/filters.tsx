'use client'
import { useFilters } from '~/Providers/store/useFilters'
import CategoryFilters from '~/features/Filters/CategoryFilters'
import ColorFilters from '~/features/Filters/ColorFilters'
import { Button } from '~/shared/ui/button'
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from '~/shared/ui/sheet'

export default function SheetFilters() {
   const resetFilters = useFilters(state => state.resetFilters)
   return (
      <Sheet modal={true}>
         <SheetTrigger asChild>
            <Button variant='default'>Фильтры</Button>
         </SheetTrigger>
         <SheetContent side={'left'}>
            <SheetHeader>
               <SheetTitle>Выберите фильтры</SheetTitle>
            </SheetHeader>
            <div className='flex flex-col gap-5 py-5'>
               <ColorFilters />
               <CategoryFilters />
            </div>
            <SheetFooter>
               <SheetClose asChild>
                  <Button
                     type='submit'
                     variant={'default'}
                     className='w-full mt-5'
                     onClick={() => resetFilters()}
                  >
                     сбросить фильтры
                  </Button>
               </SheetClose>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   )
}
