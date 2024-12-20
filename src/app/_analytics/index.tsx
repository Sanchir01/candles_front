'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import type React from 'react'
import toast from 'react-hot-toast'

if (typeof window !== 'undefined') {
   if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
         api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
         person_profiles: 'identified_only'
      })
   } else {
     toast.error('NEXT_PUBLIC_POSTHOG_KEY is not set')
   }
}
export default function CSPostHogProvider({ children }: { children: React.ReactNode }) {
   return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
