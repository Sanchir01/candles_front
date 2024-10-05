'use client'
import { useAllCandles } from '~/shared/hooks/allCandles'
import { Container, Title } from '~/shared/ui'
import { ProductCart } from '~/widgets/productcart'

export default function Catalog() {
	const { data, isLoading, isSuccess, isError } = useAllCandles()
	return (
		<div className={'mt-10'}>
			<Container>
				<Title text={'All candles'} size='lg' />
				<div className=''>
					{isLoading
						? 'loading'
						: data?.__typename == 'AllCandlesOk'
							? data.candles.map(({ title, images, id }) => (
									<ProductCart
										key={id}
										image={images[0]}
										title={title}
										id={id}
									/>
								))
							: 'no data'}
				</div>
				<div className='h-[4000px]'></div>
			</Container>
		</div>
	)
}
