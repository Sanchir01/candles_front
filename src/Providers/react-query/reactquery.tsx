import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '~/shared/api/api'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from 'react'

export const ReactQueryProvider = ({ children }: { children?: ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			{children}
		</QueryClientProvider>
	)
}
