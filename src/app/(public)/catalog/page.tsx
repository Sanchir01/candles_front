'use client'
import { useAllCandles } from '~/shared/hooks/allCandles'
import { useAllCategorys } from '~/shared/hooks/allCategorys'
import { useAllColor } from '~/shared/hooks/allCandles'
import { Container, Title } from '~/shared/ui'
import { ProductCart } from '~/widgets/productcart'
import { Category } from '~/widgets/category/index'

export default function Catalog() {
	const {
		data: candlesData,
		isLoading: candlesLoading,
		isSuccess: candlesSuccess,
		isError: candlesError
	} = useAllCandles()
	const {
		data: categoryData,
		isLoading: categoryLoading,
		isSuccess: categorySuccess,
		isError: categoryError
	} = useAllCategorys()
	const {
		data: colorData,
		isLoading: colorLoading,
		isSuccess: colorSuccess,
		isError: colorError
	} = useAllColor()
	return (
		<div className={'mt-10'}>
			<Container>
				<Title text={'All candles'} size='lg' />
				<div className=''>
					{candlesLoading
						? 'loading'
						: candlesData?.__typename == 'AllCandlesOk'
							? candlesData.candles.map(({ title, images, id }) => (
									<ProductCart
										key={id}
										image={images[0]}
										title={title}
										id={id}
									/>
								))
							: 'no data'}
				</div>
				{/*  */}
				<div className=''>
					{categoryLoading
						? 'loading'
						: categoryData?.__typename == 'CategoryGetAllOk'
							? categoryData.category.map(({ title, id }) => (
									<Category key={id} title={title} id={id} />
								))
							: 'no data'}
				</div>
				{/*  */}
				{/* <div className=''>
					{colorLoading
						? 'loading'
						: colorData?.__typename == 'AllColorOk'
							? colorData.colors.map(({ title, id }) => (
									<ProductCart key={id} image={''} title={title} id={id} />
								))
							: 'no data'}
				</div> */}
				{/*  */}
				<div className='h-[4000px]'></div>
			</Container>
		</div>
	)
}
