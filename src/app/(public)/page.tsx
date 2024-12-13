import { cookies } from 'next/headers'
import HomeContentComponent from '~/widgets/home'

export default async function Home() {
   const cookieStore = await cookies()
   console.log('this Cookie', cookieStore)
   return <HomeContentComponent />
}
