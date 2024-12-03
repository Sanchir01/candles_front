import { HandCoins, ShieldCheck, Soup, Sprout } from 'lucide-react'
import { FC } from 'react'
import { Container, Title } from '~/shared/ui'

const Advantages: FC = () => {
	return (
		<Container>
			<Title
				text='Почему стоит выбрать нас'
				className='text-mySecondary '
				size='lg'
			/>
			<div className='flex justify-between pt-10 text-myDestructive'>
				<div className='flex flex-col items-center '>
					<ShieldCheck size={120} color='#bda18c' />
					<div className='mt-5 text-xl'>Гарантия качесва</div>
				</div>
				<div className='flex flex-col items-center '>
					<Sprout size={120} color='#bda18c' />
					<div className='mt-5 text-xl'>Натуральные компоненты</div>
				</div>
				<div className='flex flex-col items-center '>
					<HandCoins size={120} color='#bda18c' />
					<div className='mt-5 text-xl'>Ручная работа</div>
				</div>
				<div className='flex flex-col items-center '>
					<Soup size={120} color='#bda18c' />
					<div className='mt-5 text-xl'>Ароматы на любой вкус</div>
				</div>
			</div>
		</Container>
	)
}

export default Advantages
