import { Metadata, Viewport } from 'next'
import './globals.css'
import { Arsenal } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Provider } from '~/Providers/Provider'
import YandexMetrika from '~/Providers/YMetrika'
const ArsenalFont = Arsenal({
   subsets: ['latin'],
   weight: ['400', '700']
})

export const metadata: Metadata = {
   title: 'Home'
}
export const viewport: Viewport = {
   themeColor: '#FFFFFF'
}
export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='ru' suppressHydrationWarning>
         <body className={ArsenalFont.className}>
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
         <YandexMetrika enabled={!!(process.env.NODE_ENV === 'production')} />
      </html>
   )
}
