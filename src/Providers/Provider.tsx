import { ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'
import { ReactQueryProvider } from '~/Providers/react-query/reactquery'
import { ThemeProvider } from '~/Providers/theme/theme-provider'
import { apolloClient } from '~/shared/api/api'
import { ComposeChildren } from '~/shared/lib/react-utils'

export const Provider = ({ children }: { children: ReactNode }) => {
   return (
      <ComposeChildren>
         <ThemeProvider />
         <ReactQueryProvider />
         {children}
      </ComposeChildren>
   )
}
