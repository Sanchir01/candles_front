'use client'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { BreadcrumbsHeaderAdmin } from './bread'
const pathNameMap: Record<string, string> = {
   admin: 'Adm'
   // Add more mappings as needed
}

export function AdaptiveBreadcrumbsHeaderAdmin() {
   const pathname = usePathname()

   const breadcrumbItems = useMemo(() => {
      const segments = pathname.split('/').filter(Boolean)
      let currentPath = ''

      return segments.map((segment, index) => {
         currentPath += `/${segment}`

         // Используем маппинг или преобразуем URL в текст
         const label =
            pathNameMap[segment] ||
            segment
               .split('-')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ')

         return {
            label,
            href: currentPath
         }
      })
   }, [pathname])

   if (pathname === '/admin') {
      // Если мы на главной странице админки, показываем только её
      return (
         <BreadcrumbsHeaderAdmin
            items={[{ label: 'Админ панель', href: '/admin' }]}
         />
      )
   }

   // Для остальных страниц добавляем "Админ панель" в начало
   return (
      <BreadcrumbsHeaderAdmin
         items={[
            { label: 'Админ панель', href: '/admin' },
            ...breadcrumbItems.slice(1) // Пропускаем первый элемент (admin), так как мы его уже добавили
         ]}
      />
   )
}
