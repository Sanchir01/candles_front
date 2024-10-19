import type { Metadata } from 'next'
import styles from '~/shared/styles/NotFound.module.scss'
import { Container } from '~/shared/ui'
import { Button } from '~/shared/ui/button'
export const metadata: Metadata = {
   title: 'Mahakala | Главная'
}
export default function Home() {
   return (
      <div className=''>
         <Container>
            <Button>Hi</Button>
         </Container>
      </div>
   )
}
