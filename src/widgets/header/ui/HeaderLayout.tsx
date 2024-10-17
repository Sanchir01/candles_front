import type React from 'react'
import style from '~/shared/styles/Header.module.scss'
export interface HeaderLayoutProps {
   nav?: React.ReactNode
   actions?: React.ReactNode
   logo?: React.ReactNode
   profile?: React.ReactNode
   admin?: React.ReactNode
   theme?: React.ReactNode
   cart?: React.ReactNode
}

export const HeaderLayout = ({
   nav,
   actions,
   logo,
   profile,
   admin,
   cart,
   theme
}: HeaderLayoutProps) => {
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
                  {cart}
               </div>
            </div>
         </div>
      </header>
   )
}
