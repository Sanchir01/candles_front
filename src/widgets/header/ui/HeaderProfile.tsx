'use client'
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
            <Button variant={'ghost'} size={'sm'}>
               <UsersRound className='cursor-pointer' />
            </Button>
         </DropdownMenuTrigger>
         {userProfile ? (
            <DropdownMenuContent className='mt-3'>
               <DropdownMenuLabel>{userProfile.title}</DropdownMenuLabel>
               <DropdownMenuGroup>
                  <DropdownMenuItem>{userProfile.email}</DropdownMenuItem>
                  {userProfile.role === 'admin' ? (
                     <DropdownMenuItem>Администратор</DropdownMenuItem>
                  ) : (
                     <></>
                  )}
                  <DropdownMenuItem>
                     <Button
                        size='lg'
                        onClick={() => (logout(), push('/catalog'))}
                        className='w-full'
                     >
                        Выйти из аккаунта
                     </Button>
                  </DropdownMenuItem>
               </DropdownMenuGroup>
            </DropdownMenuContent>
         ) : (
            <DropdownMenuContent className='w-full'>
               <DropdownMenuItem>
                  <Button
                     className='w-full'
                     onClick={() => push('/auth/login')}
                  >
                     Войти
                  </Button>
               </DropdownMenuItem>
            </DropdownMenuContent>
         )}
      </DropdownMenu>
   )
}
