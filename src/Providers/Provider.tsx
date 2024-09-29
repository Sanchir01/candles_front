import { ReactNode } from 'react'
import { ComposeChildren } from '~/shared/lib/react-utils'
import { ThemeProvider } from '~/Providers/theme/theme-provider'
import { ReactQueryProvider } from '~/Providers/react-query/reactquery'

export const Provider = ({ children }: { children: ReactNode }) => {
	return (
		<ComposeChildren>
			<ThemeProvider />
			<ReactQueryProvider />
			{children}
		</ComposeChildren>
	)
}
