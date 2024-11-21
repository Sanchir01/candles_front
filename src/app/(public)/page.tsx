import type { Metadata } from 'next'
import Image from 'next/image'
import { SkeletonCart } from '~/entities/entitycandles/SkeletenCart'
import styles from '~/shared/styles/NotFound.module.scss'
import { Container } from '~/shared/ui'
import { Button } from '~/shared/ui/button'
export const metadata: Metadata = {
   title: 'Mahakala | Главная'
}
export default function Home() {
   return (
      <div className={styles.home}>
         <Container>
            <Button>Hi</Button>
            <SkeletonCart />
            <Image
               src={'https://random.imagecdn.app/800/600'}
               alt='candle'
               width={100}
               height={100}
            />
         </Container>
      </div>
   )
}
