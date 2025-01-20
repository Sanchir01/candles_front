import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useFilters } from '~/Providers/store/useFilters'

import { colorService } from '~/shared/service/color'
import { Skeleton } from '~/shared/ui'
import {
	Select,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectContent
} from '~/shared/ui/select'

const ColorFilters = () => {
	const setColorFilter = useFilters(state => state.changeColors)
	const { data, isLoading, isSuccess, isError } = useQuery({
		...colorService.allColorQueryOptions()
	})

	if (isLoading || isError) {
		return <Skeleton className='w-[180px] h-6 rounded-md' />
	}

	return (
		<Select onValueChange={value => setColorFilter(value)}>
			<SelectTrigger className='w-full'>
				<SelectValue placeholder='Цвета' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup className='w-full'>
					{isSuccess &&
						data?.__typename === 'AllColorOk' &&
						data?.colors?.map(item => (
							<SelectItem key={item.id} value={item.id}>
								{item.title}
							</SelectItem>
						))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default ColorFilters
