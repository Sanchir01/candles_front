'use client'
import { useUser } from '~/Providers/store/useUser'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'

import { ShieldCheck } from 'lucide-react'
import { Role } from '~/shared/graphql/gql/graphql'
import Link from 'next/link'
const HeaderAdmin = () => {
   const user = useStoreZustand(useUser, state => state.user)

   return user?.role === Role.Admin ? (
      <Link href={'/admin'}>
         <ShieldCheck />
      </Link>
   ) : (
      <></>
   )
}

export default HeaderAdmin
