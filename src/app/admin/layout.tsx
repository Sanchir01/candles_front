'use client'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUser } from '~/Providers/store/useUser'
import { HeaderProfileEnum } from '~/shared/constants/headerprofile'
import { EnumTokens } from '~/shared/lib/Tokens.service'
import { Header } from '~/widgets/header'
export default function RootLayout({
   children
}: {
   children: React.ReactNode
}) {
   const accessToken = Cookie.get(EnumTokens.ACCESS_TOKEN)
   const router = useRouter()
   const logout = useUser(state => state.logout)

   useEffect(() => {
      if (!accessToken) {
         logout(), router.replace('/auth/login')
      }
   }, [accessToken, logout, router])

   return (
      <>
         <Header variant={HeaderProfileEnum.PUBLIC} />
         {children}
         <div className=''>tes</div>
      </>
   )
}
