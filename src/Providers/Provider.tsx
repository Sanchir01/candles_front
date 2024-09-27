import { ReactNode } from 'react'
import { ComposeChildren } from '~/shared/lib/react-utils'
import { ThemeProvider } from '~/Providers/theme/theme-provider'
import { ReactQueryProvider } from '~/Providers/react-query/reactquery'
import { CSPostHogProvider } from '~/app/_analytics/page'
import { PosthogProvider } from '~/Providers/posthog/posthog'

export const Provider = ({ children }: { children: ReactNode }) => {
	return (
		<ComposeChildren>
			<ThemeProvider />
			<ReactQueryProvider />
			<PosthogProvider />
			{children}
		</ComposeChildren>
	)
}
