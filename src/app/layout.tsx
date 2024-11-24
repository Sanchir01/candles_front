import './globals.css'
import { Toaster } from 'react-hot-toast'
import { Provider } from '~/Providers/Provider'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='ru' suppressHydrationWarning>
         <body className={inter.className}>
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
