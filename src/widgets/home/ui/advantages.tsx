import { HandCoins, ShieldCheck, Soup, Sprout } from 'lucide-react'
import { FC } from 'react'
import { useMediaQuery } from '~/shared/hooks/useMediaQuery'
import { cn } from '~/shared/lib/utils'
import st from '~/shared/styles/home/advantages.module.scss'
import { Container, Title } from '~/shared/ui'

const Advantages: FC = () => {
   const isMedia576 = useMediaQuery('(max-width:576px)')
   return (
      <Container>
         <Title
            text='Почему стоит выбрать нас'
            className={cn('text-mySecondary', st.advantages__title)}
         />
         <div className={cn('text-myDestructive', st.advantages__icons)}>
            <div className={st.advantages__block}>
               <ShieldCheck size={isMedia576 ? 100 : 120} color='#bda18c' />
               <div className={st.advantages__text}>Гарантия качесва</div>
            </div>
            <div className={st.advantages__block}>
               <Sprout size={isMedia576 ? 100 : 120} color='#bda18c' />
               <div className={st.advantages__text}>Натуральные компоненты</div>
            </div>
            <div className={st.advantages__block}>
               <HandCoins size={isMedia576 ? 100 : 120} color='#bda18c' />
               <div className={st.advantages__text}>Ручная работа</div>
            </div>
            <div className={st.advantages__block}>
               <Soup size={isMedia576 ? 100 : 120} color='#bda18c' />
               <div className={st.advantages__text}>Ароматы на любой вкус</div>
            </div>
         </div>
      </Container>
   )
}

export default Advantages
