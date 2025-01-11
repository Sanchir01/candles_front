import { ReactNode } from 'react'
import { ReactQueryProvider } from '~/Providers/react-query/reactquery'
import { ThemeProvider } from '~/Providers/theme/theme-provider'
import { ComposeChildren } from '~/shared/lib/react-utils'
import YandexMetrika from './YMetrika'

export const Provider = ({ children }: { children: ReactNode }) => {
   return (
      <ComposeChildren>
         <ThemeProvider />
         <ReactQueryProvider />
         <YandexMetrika enabled={!!(process.env.NODE_ENV === 'production')} />
         {children}
      </ComposeChildren>
   )
}
