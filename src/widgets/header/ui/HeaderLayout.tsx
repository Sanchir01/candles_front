import { Home } from 'lucide-react'
import Link from 'next/link'
import type React from 'react'
import { HeaderVariant } from '~/shared/constants/header'
import style from '~/shared/styles/Header.module.scss'
import { Button } from '~/shared/ui'
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator
} from '~/shared/ui/breadcrumb'
import { Separator } from '~/shared/ui/separator'
import { SidebarTrigger } from '~/shared/ui/sidebar'
export interface HeaderLayoutProps {
   nav?: React.ReactNode
   actions?: React.ReactNode
   logo?: React.ReactNode
   profile?: React.ReactNode
   admin?: React.ReactNode
   theme?: React.ReactNode
   variant?: HeaderVariant
}

export const HeaderLayout = ({
   nav,
   actions,
   logo,
   profile,
   admin,
   variant,
   theme
}: HeaderLayoutProps) => {
   if (variant === HeaderVariant.ADMIN) {
      return (
         <header className='sticky top-0 bg-background  shrink-0 items-center border-b '>
            <div className='flex px-4  h-16 items-center justify-between'>
               <div className='flex items-center'>
                  <SidebarTrigger className='-ml-1' />
                  <Separator orientation='vertical' className='mr-2 h-4' />
                  <Breadcrumb>
                     <BreadcrumbList>
                        <BreadcrumbItem className='hidden md:block'>
                           <Link href={'/admin'}>admin</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className='hidden md:block' />
                        <BreadcrumbItem>
                           <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                        </BreadcrumbItem>
                     </BreadcrumbList>
                  </Breadcrumb>
               </div>
               <div className='flex gap-3 items-center'>
                  {theme}
                  {profile}
                  <Button variant='ghost' size='icon'>
                     <Link href={'.'}>
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
               {logo}
               {nav}
               <div className='max-[998px]:hidden flex gap-2 items-center'>
                  {actions}
                  {profile}
                  {theme}
                  {admin}
               </div>
            </div>
         </div>
      </header>
   )
}
