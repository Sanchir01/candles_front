import { Metadata } from 'next'
import HomeContentComponent from '~/widgets/home'

export const metadata: Metadata = {
   title: 'Home | Mahakala',
   description: 'main page to mahakala.ru',
   robots: 'index, follow'
}

export default function Home() {
   return <HomeContentComponent />
}
