import Link from 'next/link'
import { FooterColumnContent } from '~/shared/constants/footercontent'
import TG from '~/shared/public/icons/tg'
import VK from '~/shared/public/icons/vk'
import WhatsApp from '~/shared/public/icons/whatsapp'
import { Container, Title } from '~/shared/ui'
import FooterColumn from './ui/footerColumn'

const Footer = () => {
   return (
      <footer className='bg-myPrimary py-5 '>
         <Container>
            <div className='flex justify-between flex-wrap'>
               {FooterColumnContent.map((item, i) => (
                  <FooterColumn
                     key={i}
                     title={item.title}
                     content={item.content}
                     column={item.column}
                  />
               ))}
               <div className=''>
                  <Title text={'Мы в социальных сетях'} />
                  <div className='mt-2 flex gap-2'>
                     <Link href={'#'}>
                        <TG fill='#000' className='h-5 w-5' />
                     </Link>
                     <Link href={'#'}>
                        <VK fill='#000' className='h-5 w-5' />
                     </Link>
                     <Link href={'#'}>
                        <WhatsApp fill='#000' className='h-5 w-5' />
                     </Link>
                  </div>
               </div>
            </div>
         </Container>
      </footer>
   )
}

export default Footer
