'use client'
import { Suspense } from 'react'
import { AuthServiceTokens } from '~/shared/lib/Tokens.service'
import HomeContentComponent from '~/widgets/home'
import LoadingMainPage from './loading'

const token = AuthServiceTokens.getAccessToken()
export default function Home() {
   return (
      <Suspense fallback={<LoadingMainPage />}>
         {token ? token : 'нету токена'}
         <HomeContentComponent />
      </Suspense>
   )
}
