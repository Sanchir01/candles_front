'use client'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, ReactNode } from 'react'
import useCartStore from '~/Providers/store/useCart'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import { priceFormat } from '~/shared/lib/utils'
import {
   Button,
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from '~/shared/ui'

export interface ICartLayout {
   content: ReactNode
}

const LayoutCart: FC<ICartLayout> = ({ content }) => {
   const { push } = useRouter()
   const cart = useStoreZustand(useCartStore, state => state.cart)
   const totalPrice = cart
      ?.map(item => item.price)
      .reduce((sum, a) => sum + a, 0)
   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button className='relative' variant={'ghost'} size={'icon'}>
               <ShoppingCart className='cursor-pointer' />
               {cart?.length === 0 ? (
                  <></>
               ) : (
                  <span className='absolute top-[10px] left-[18px] text-[10px]'>
                     {cart?.length}
                  </span>
               )}
            </Button>
         </SheetTrigger>
         {
            <SheetContent
               className={
                  'p-0 pb-2 max-[650px]:w-full min-[640px]:max-w-[600px]'
               }
            >
               <SheetHeader className='border-b-2 border-black pt-4 dark:border-white'>
                  <div className='px-4 pb-4 flex gap-2 items-center uppercase'>
                     <SheetTitle>Корзина</SheetTitle>
                     <SheetDescription className='flex gap-1'>
                        <span>{cart?.length}</span>
                        <span>товаров</span>
                     </SheetDescription>
                  </div>
               </SheetHeader>
               {cart?.length !== 0 ? (
                  <>
                     {content}
                     <SheetFooter className='lg:px-3'>
                        <div className=' flex flex-col w-full'>
                           <div className='flex justify-between p-3'>
                              <p>Итого</p>
                              <div className=''>
                                 {totalPrice && priceFormat.format(totalPrice)}
                              </div>
                           </div>
                           <SheetClose asChild>
                              <Button
                                 className='w-full'
                                 type='submit'
                                 onClick={() => push('/order')}
                              >
                                 оформить заказ
                              </Button>
                           </SheetClose>
                        </div>
                     </SheetFooter>
                  </>
               ) : (
                  <div className='mt-2 text-xl'>Корзина Пуста</div>
               )}
            </SheetContent>
         }
      </Sheet>
   )
}

export default LayoutCart
