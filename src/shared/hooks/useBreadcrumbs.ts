'use client'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
export function useBreadcrumbs() {
   const pathname = usePathname()

   return useMemo(() => {
      const segments = pathname.split('/').filter(Boolean)

      return segments.map((segment, index) => {
         const href = '/' + segments.slice(0, index + 1).join('/')

         // Форматируем сегмент: разбиваем по дефису, делаем первую букву заглавной
         const label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

         return { href, label }
      })
   }, [pathname])
}
