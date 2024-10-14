'use client'
/* biome-ignore lint/style/noCommaOperator: <explanation> */
import { UsersRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import { useUser } from '~/Providers/store/useUser'
import { useStoreZustand } from '~/shared/hooks/useStoreZustand'
import { Button } from '~/shared/ui'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuTrigger
} from '~/shared/ui/dropdown-menu'

export const HeaderProfile: FC = () => {
   const { push } = useRouter()
   const userProfile = useStoreZustand(useUser, state => state.user)
   const logout = useUser(state => state.logout)
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <UsersRound className='cursor-pointer' />
         </DropdownMenuTrigger>
         {userProfile ? (
            <DropdownMenuContent className='mt-3'>
               <DropdownMenuLabel>{userProfile.title}</DropdownMenuLabel>
               <DropdownMenuGroup>
                  <DropdownMenuItem>{userProfile.email}</DropdownMenuItem>
                  <DropdownMenuItem>
                     {}
                     <Button onClick={() => (logout(), push('/catalog'))}>
                        Выйти из аккаунта
                     </Button>
                  </DropdownMenuItem>
               </DropdownMenuGroup>
            </DropdownMenuContent>
         ) : (
            <DropdownMenuContent className='w-full'>
               <Button onClick={() => push('/auth/login')}>Войти</Button>
            </DropdownMenuContent>
         )}
      </DropdownMenu>
   )
}
