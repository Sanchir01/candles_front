import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ICart } from '~/Providers/store/useCart'

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export const priceFormat = new Intl.NumberFormat('ru-RU', {
   style: 'currency',
   currency: 'RUB',
   minimumFractionDigits: 0
})
export const allItems = (item: ICart[]) => {
   const totalQuantity = item.reduce((total, item) => total + item.quantity, 0)
   return totalQuantity
}

export const tryThrow = async <T>({
   fn
}: {
   fn: () => Promise<T>
}): Promise<T | undefined> => {
   try {
      return await fn()
   } catch (e) {
      console.error(e)
      return undefined
   }
}
