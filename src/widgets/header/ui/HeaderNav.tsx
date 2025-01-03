import Link from 'next/link'
import { cn } from '~/shared/lib/utils'
import style from '~/shared/styles/Header.module.scss'

export const HeaderNav = () => {
   return (
      <ul className={cn(style.header_nav, 'max-[998px]:flex-col')}>
         <li className={style.header_nav_left_home}>
            <Link href='/'>Главная</Link>
         </li>
         <li className={style.header_nav_left_catalog}>
            <Link href='/catalog'>Каталог</Link>
         </li>
         <li className={style.header_nav_left_newsession}>
            <Link href='/'>Сезонные новинки</Link>
         </li>
         <li className={style.header_nav_left_contacts}>
            <Link href='/'>Контакты</Link>
         </li>
      </ul>
   )
}
