'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useUser } from '~/Providers/store/useUser'
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from '~/shared/ui'
import { Loader } from '~/shared/ui'
import { Button } from '~/shared/ui'
import { Card, CardContent, CardHeader } from '~/shared/ui'
import { Input } from '~/shared/ui'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import type { FormEvent } from 'react'
import { useLogin } from '~/shared/hooks/userLogin'
import { type IInputLogin, loginSchema } from '~/shared/types/Auth.types'

export default function LoginPage() {
   const form = useForm<IInputLogin>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: '',
         password: ''
      }
   })
   const { replace } = useRouter()

   const userStorage = useUser(state => state.setUser)
   const { mutateAsync, isPending } = useLogin()
   const onSubmit = async (data: IInputLogin) => {
      try {
         const { auth } = await mutateAsync({
            email: data.email,
            password: data.password
         })
         if (auth.login.__typename === 'LoginOk') {
            userStorage(auth.login)

            replace('/catalog')
         }
         // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      } catch (e: any) {
         toast.error(e.response?.errors[0].message ?? e.message)
      }
   }

   return (
      <Card className='p-8 max-w-[350px]'>
         <CardHeader className='text-xl'>Вход в аккаунт</CardHeader>
         <CardContent>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='flex max-w-md w-full flex-col gap-4'
               >
                  <FormField
                     name='email'
                     control={form.control}
                     render={({ field }) => (
                        <FormItem className='flex flex-col gap-2 '>
                           <FormLabel>Номер телефона</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 type='email'
                                 placeholder='Введите email'
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     name='password'
                     control={form.control}
                     render={({ field }) => (
                        <FormItem className='flex flex-col gap-2 '>
                           <FormLabel>Пароль</FormLabel>
                           <FormControl>
                              <Input
                                 {...field}
                                 type='password'
                                 placeholder='Введите пароль'
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Link
                     href={'/auth/registration'}
                     className='hover:underline  cursor-pointer py-2'
                  >
                     Пройти регистрацию
                  </Link>
                  <Button type='submit' className='w-full '>
                     {isPending ? <Loader /> : 'Войти'}
                  </Button>
               </form>
            </Form>
         </CardContent>
      </Card>
   )
}
