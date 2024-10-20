import type { Metadata } from 'next'

import './globals.css'
import { Toaster } from 'react-hot-toast'
import { Provider } from '~/Providers/Provider'
import { CSPostHogProvider } from '~/app/_analytics/page'

export const metadata: Metadata = {
   icons: {
      icon: './favicon.ico'
   }
}
export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='ru' suppressHydrationWarning>
         <body>
            <Toaster
               position='top-center'
               reverseOrder={false}
               toastOptions={{
                  className: 'dark:bg-[#333] dark:text-white',
                  style: {
                     borderRadius: '10px'
                  }
               }}
            />
            <Provider>
               <div className='wrapper'>{children}</div>
            </Provider>
         </body>
      </html>
   )
}
