import { FooterColumnType } from '~/widgets/footer/ui/footerColumn'

export const FooterColumnContent: FooterColumnType[] = [
   {
      title: 'Каталог',
      content: [
         { title: 'candle classic', href: '/catalog' },
         { title: 'candle big', href: '/catalog' },
         { title: 'candle small', href: '/catalog' }
      ],
      column: true
   },
   {
      title: 'Контакты',
      content: [
         { title: '+7 999 999 99 99', href: 'tel:+7 999 999 99 99' },
         { title: 'test@mail.ru', href: `mailto:test@mail.ru` }
      ],
      column: true
   }
]
