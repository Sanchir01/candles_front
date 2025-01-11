'use client'
import { Router } from 'next/router'
import { useCallback, useEffect } from 'react'
import ym, { YMInitializer } from 'react-yandex-metrika'
const account = Number(process.env.YANDEX_METRIKA)
const YandexMetrika = ({ enabled }: { enabled: boolean }) => {
   const hit = useCallback(
      (url: string) => {
         if (enabled) {
            ym('hit', url)
         } else {
            console.log(`%c[YandexMetrika](HIT)`, `color: orange`, url)
         }
      },
      [enabled]
   )

   useEffect(() => {
      hit(window.location.pathname + window.location.search)
      Router.events.on('routeChangeComplete', (url: string) => hit(url))
   }, [hit])

   if (!enabled) return null
   return (
      <YMInitializer
         accounts={[account]}
         options={{
            defer: true,
            webvisor: true,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true
         }}
         version='2'
      />
   )
}

export default YandexMetrika
