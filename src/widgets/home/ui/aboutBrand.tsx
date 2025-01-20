import Image from 'next/image'
import { cn } from '~/shared/lib/utils'
import candle from '~/shared/public/images/candle.webp'
import st from '~/shared/styles/home/about.module.scss'
import { Container } from '~/shared/ui'
const AboutBrand = () => {
	return (
		<Container>
			<div className={st.about}>
				<div className={st.about__text}>
					<h2 className={cn('text-mySecondary', st.about__title)}>О бренде</h2>
					<div
						className={cn(
							'flex flex-col gap-5 text-myDestructive mt-5  dark:text-white',
							st.about__description
						)}
					>
						<span>
							CANDLES- магазин свечей, где каждый момент наполняется теплом и
							уютом! Мы предлагаем широкий ассортимент свечей ручной работы,
							созданных с любовью и вниманием к деталям. В нашем каталоге вы
							найдете ароматические свечи, которые наполнят ваш дом нежными и
							гармоничными нотами, а также декоративные свечи, станут изысканным
							украшением вашего интерьера. Используя только натуральные
							ингредиенты и экологически чистые материалы, мы заботимся о вашем
							комфорте и окружающей среде
						</span>
						<span>
							Наши свечи — это не просто источник света, а настоящий символ уюта
							и гармонии. Будь то романтический вечер, расслабляющая ванна или
							особый подарок близким, мы поможем сделать ваш момент
							незабываемым. Каждый продукт уникален, создается вручную и несет в
							себе частичку тепла наших мастеров. Откройте для себя мир свечей,
							который вдохновляет и дарит особую атмосферу в каждом мгновении!
						</span>
					</div>
				</div>
				<div className={st.about__image}>
					<Image
						src={candle}
						height={0}
						width={0}
						alt='candle'
						className='w-full h-full object-cover'
					/>
				</div>
			</div>
		</Container>
	)
}

export default AboutBrand
