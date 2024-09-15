import { ReactNode } from 'react'
import { ComposeChildren } from '~/shared/lib/react-utils'
import { ThemeProvider } from '~/Providers/ThemeProvider/theme-provider'

export const Provider = ({ children }: { children: ReactNode }) => {
	return (
		<ComposeChildren>
			<ThemeProvider />
			{children}
		</ComposeChildren>
	)
}
