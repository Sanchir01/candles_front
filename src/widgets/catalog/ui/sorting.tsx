'use client'
import { useFilters } from '~/Providers/store/useFilters'
import { CandlesSortEnum } from '~/shared/graphql/gql/graphql'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '~/shared/ui/select'
const dataSorting = [
	{ value: CandlesSortEnum.CreatedAtDesc, label: 'По дате' },
	{ value: CandlesSortEnum.PriceAsc, label: 'По возростанию цены' },
	{ value: CandlesSortEnum.PriceDesc, label: 'По убыванию цены' }
]
const Sorting = () => {
	const setSorting = useFilters(state => state.changeSorting)
	return (
		<Select onValueChange={value => setSorting(value as CandlesSortEnum)}>
			<SelectTrigger className='max-w-[180px]'>
				<SelectValue placeholder='Сортировка' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{dataSorting.map(item => (
						<SelectItem key={item.value} value={item.value}>
							{item.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default Sorting
