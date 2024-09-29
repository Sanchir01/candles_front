'use client'
import { useAllCandles } from '~/shared/hooks/allCandles'
import React from 'react'
import { ProductCart } from '~/widgets/productcart'
import { Container, Title } from '~/shared/ui'
export default function () {
	const { data, isLoading } = useAllCandles()
	console.log(data)
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
