'use client'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { BreadcrumbsHeaderAdmin } from './bread'
const pathNameMap: Record<string, string> = {
   admin: 'Admin'
}

export function AdaptiveBreadcrumbsHeaderAdmin() {
   const pathname = usePathname()

   const breadcrumbItems = useMemo(() => {
      const segments = pathname.split('/').filter(Boolean)
      let currentPath = ''

      return segments.map((segment, _) => {
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

   // Для остальных страниц добавляем "Админ панель" в начало
   return (
      <BreadcrumbsHeaderAdmin
         items={[
            { label: 'admin', href: '/admin' },
            ...breadcrumbItems.slice(1) // Пропускаем первый элемент (admin), так как мы его уже добавили
         ]}
      />
   )
}
//  return (
//       <nav className='flex' aria-label='Breadcrumb'>
//          <ol className='flex items-center space-x-2'>
//             {/* Desktop - показывать все элементы */}
//             <div className='hidden md:flex md:items-center md:space-x-2'>
//                {items.map((item, index) => (
//                   <React.Fragment key={item.href}>
//                      {index > 0 && (
//                         <ChevronRight className='h-4 w-4 text-muted-foreground' />
//                      )}
//                      <li>
//                         <Link
//                            href={item.href}
//                            className={`text-sm ${
//                               index === items.length - 1
//                                  ? 'font-medium text-foreground'
//                                  : 'text-muted-foreground hover:text-foreground'
//                            }`}
//                         >
//                            {item.label}
//                         </Link>
//                      </li>
//                   </React.Fragment>
//                ))}
//             </div>

//             {/* Mobile - показывать только предыдущий и текущий */}
//             <div className='flex md:hidden items-center space-x-2'>
//                {items.length > 1 && (
//                   <>
//                      <li>
//                         <Link
//                            href={items[items.length - 2].href}
//                            className='text-sm text-muted-foreground hover:text-foreground'
//                         >
//                            {items[items.length - 2].label}
//                         </Link>
//                      </li>
//                      <ChevronRight className='h-4 w-4 text-muted-foreground' />
//                   </>
//                )}
//                <li>
//                   <Link
//                      href={items[items.length - 1].href}
//                      className='text-sm font-medium text-foreground'
//                   >
//                      {items[items.length - 1].label}
//                   </Link>
//                </li>
//             </div>
//          </ol>
//       </nav>
//    )
