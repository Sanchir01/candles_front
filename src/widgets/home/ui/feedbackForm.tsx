'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { cn } from '~/shared/lib/utils'
import st from '~/shared/styles/home/feedback.module.scss'
import { FeedbackFormType, FeedbackSchema } from '~/shared/types/fedbackform'
import {
   Button,
   Container,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
   Input
} from '~/shared/ui'
import { Form } from '~/shared/ui'
const FeedbackSection: FC = () => {
   const form = useForm<FeedbackFormType>({
      resolver: zodResolver(FeedbackSchema),
      defaultValues: {
         email: '',
         title: ''
      }
   })

   const onSubmit = (data: FeedbackFormType) => {
      alert('feedback')
   }
   return (
      <div className={st.feedback}>
         <Container>
            <div className={cn(st.feedback__wrapper, 'text-mySecondary')}>
               <div className={cn(st.feedback__text, 'line-clamp-3 ')}>
                  Не упусти возможность быть в курсе наших новинок и специальных
                  предложений
               </div>
               <Form {...form}>
                  <form
                     onSubmit={form.handleSubmit(onSubmit)}
                     className={st.feedback__form}
                  >
                     <FormField
                        name='email'
                        control={form.control}
                        render={({ field }) => (
                           <FormItem className='flex flex-col gap-2 '>
                              <FormControl>
                                 <Input
                                    {...field}
                                    type='email'
                                    placeholder='Введите email'
                                    className='p-6'
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        name='title'
                        control={form.control}
                        render={({ field }) => (
                           <FormItem className='flex flex-col gap-2 '>
                              <FormControl>
                                 <Input
                                    {...field}
                                    type='text'
                                    placeholder='Введите name'
                                    className='p-6'
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <Button type='submit' className='p-6'>
                        Отправить
                     </Button>
                  </form>
               </Form>
            </div>
         </Container>
      </div>
   )
}

export default FeedbackSection
