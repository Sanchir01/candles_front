import './globals.css'
import { Arsenal_SC } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Provider } from '~/Providers/Provider'
const Arsenal = Arsenal_SC({
   subsets: ['latin'],
   weight: ['400', '700']
})
export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='ru' suppressHydrationWarning>
         <body className={Arsenal.className}>
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
