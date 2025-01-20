'use client'
import { useQuery } from '@tanstack/react-query'
import { DeleteItem } from '~/features/Admin/deleteItem'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import { candlesService } from '~/shared/service/candles'
import AdminItemLine from '~/shared/ui/adminItem'

const AdminPage = () => {
	const { data, isLoading, isSuccess } = useQuery({
		...candlesService.AllCandlesQueryOptions({
			sort: CandlesSortEnum.PriceAsc,
			categoryId: null,
			colorId: null
		})
	})
	return (
		<>
			<div className='flex flex-1 flex-col gap-4 p-4'>
				{isLoading
					? Array.from({ length: 20 }).map((_, index) => (
							<div
								key={index}
								className='aspect-video h-12 w-full rounded-lg bg-muted/50'
							/>
						))
					: isSuccess && data?.__typename === 'AllCandlesOk'
						? data.candles.map(({ id, title }) => (
								<AdminItemLine
									key={id}
									title={title}
									View={<>create</>}
									Update={<>delete</>}
									Delete={
										<DeleteItem
											id={id}
											mutateKey={candlesService.deleteCandleByIdKey}
											mutateFn={() => candlesService.deleteCandleById({ id })}
											invalidateKey={candlesService.allCandleKey}
										/>
									}
								/>
							))
						: 'нету доступных свеч'}
			</div>
		</>
	)
}

export default AdminPage
