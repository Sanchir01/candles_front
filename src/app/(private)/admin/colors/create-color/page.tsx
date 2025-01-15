'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { colorService } from '~/shared/service/color'
import {
   createColorSchemaType,
   createColorSchema
} from '~/shared/types/admin/category.types'
import {
   Form,
   FormField,
   FormControl,
   FormItem,
   FormLabel,
   Input,
   Button
} from '~/shared/ui'

const AdminColorsPage: NextPage = () => {
   const { mutateAsync } = useMutation({
      mutationFn: (title: string) => colorService.addToColor({ title }),
      mutationKey: [colorService.addToColorKey],
      onSuccess: () => {}
   })

   const form = useForm<createColorSchemaType>({
      resolver: zodResolver(createColorSchema),
      defaultValues: {
         title: ''
      }
   })

   const onSubmit = async (data: createColorSchemaType) => {
      const { toast } = await import('react-hot-toast')
      try {
         await mutateAsync(data.title)
      } catch (e) {
         toast.error('ошибка во время создания цвета')
         console.log(e)
         return
      }
      toast.success('удачное создание цвета')
      form.reset()
   }
   return (
      <div className='px-5'>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
               <FormField
                  name='title'
                  control={form.control}
                  render={({ field }) => (
                     <FormItem className='max-w-[500px]'>
                        <FormLabel className='text-xl pl-2'>
                           название цвета
                        </FormLabel>
                        <FormControl>
                           <Input
                              {...field}
                              type='text'
                              placeholder='Введите название категории'
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />
               <Button type='submit' className='mt-5'>
                  Создать
               </Button>
            </form>
         </Form>
      </div>
   )
}

export default AdminColorsPage
