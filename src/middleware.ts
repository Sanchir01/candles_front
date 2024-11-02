import { NextRequest, NextResponse } from 'next/server'
import {
   NewTokenMutation,
   UserIdQuery,
   Role
} from './shared/graphql/gql/graphql'

enum EnumTokens {
   ACCESS_TOKEN = 'accessToken',
   REFRESH_TOKEN = 'refreshToken'
}
export async function middleware(request: NextRequest) {
   const cookies = request.cookies

   const url = request.url
   const response = new NextResponse()

   const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)
   const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)

   console.log('this cookie', refreshToken, accessToken)
   const loginPage = url.includes('/auth/login')
   const registerPage = url.includes('/auth/register')
   const adminPanel = url.includes('/admin')
   const orderPage = url.includes('/order')
   if (loginPage || registerPage) {
      if (accessToken && refreshToken) {
         return NextResponse.redirect(new URL('/catalog', url))
      }
   }

   if (loginPage || registerPage) return NextResponse.next()

   if (refreshToken === undefined) {
      return NextResponse.redirect(new URL('/auth/login', url))
   }
   if (accessToken === undefined) {
      const GetNewToken = `mutation NewTokens {
     auth {
       newTokens {
         __typename
         ... on InternalErrorProblem {
           message
         }
         ... on NewTokensOk {
           token
         }
       }
     }
   }`
      const { auth } = (
         await fetch(
            process.env.NODE_ENV === 'production'
               ? (process.env.SERVER_URL as string)
               : 'http://localhost:5000',
            {
               credentials: 'include',
               body: JSON.stringify({
                  query: GetNewToken
               }),
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
                  Cookie: `${EnumTokens.REFRESH_TOKEN}=${refreshToken.value}`
               }
            }
         ).then(res => res.json())
      ).data as NewTokenMutation

      if (auth.newTokens.__typename === 'NewTokensOk') {
         const myDate = new Date()
         myDate.setHours(myDate.getHours() + 4)
         response.cookies.set({
            name: EnumTokens.ACCESS_TOKEN,
            value: auth.newTokens.token,
            expires: myDate,
            httpOnly: true,
            secure: true,
            partitioned: true,
            sameSite: 'none'
         })

         return NextResponse.rewrite(url, response)
      }
   }
   const profileQuery = `query User {
     user {
       profile {
         __typename
         ... on InternalErrorProblem {
           message
         }
         ... on VersionMismatchProblem {
           message
         }
         ... on UserProfileOk {
           profile {
             id
             role
           }
         }
       }
     }
   }`
   const { user } = (
      await fetch(
         process.env.NODE_ENV === 'production'
            ? (process.env.SERVER_URL as string)
            : 'http://localhost:5000',
         {
            credentials: 'include',
            body: JSON.stringify({
               query: profileQuery
            }),
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Cookie: `${EnumTokens.REFRESH_TOKEN}=${refreshToken.value}`
            }
         }
      ).then(res => res.json())
   ).data as UserIdQuery

   if (orderPage && user === undefined)
      return NextResponse.redirect(new URL('/auth/login', url))

   if (
      adminPanel &&
      user?.profile.__typename === 'UserProfileOk' &&
      user.profile.profile.role !== Role.Admin
   )
      return NextResponse.redirect(new URL('/auth/login', url))

   return response
}

export const config = {
   matcher: ['/auth/:path*', '/admin/:path*']
}
