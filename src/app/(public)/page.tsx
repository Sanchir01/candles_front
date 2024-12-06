import { Suspense } from 'react'
import HomeContentComponent from '~/widgets/home'
import LoadingMainPage from './loading'
import { cookies } from 'next/headers'

export default async function Home() {
   const cookieStore = await cookies()
   console.log('this Cookie', cookieStore)
   return (
      <Suspense fallback={<LoadingMainPage />}>
         <HomeContentComponent />
      </Suspense>
   )
}
