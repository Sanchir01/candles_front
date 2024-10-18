'use client'
import { useUser } from '~/Providers/store/useUser'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import { Button } from '~/shared/ui'

import { ShieldCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Role } from '~/shared/graphql/gql/graphql'
const HeaderAdmin = () => {
   const user = useStoreZustand(useUser, state => state.user)
   const { push } = useRouter()

   return user?.role === Role.Admin ? (
      <Button variant={'ghost'} onClick={() => push('/admin')}>
         <ShieldCheck />
      </Button>
   ) : (
      <></>
   )
}

export default HeaderAdmin
