'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { categoryService } from '~/shared/service/category'
import {
	createCategorySchema,
	createCategorySchemaType
} from '~/shared/types/admin/category.types'
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	Input
} from '~/shared/ui'

const CreateCategoryPage: NextPage = () => {
	const form = useForm<createCategorySchemaType>({
		resolver: zodResolver(createCategorySchema),
		defaultValues: {
			title: ''
		}
	})
	const { mutateAsync } = useMutation({
		mutationFn: (title: string) => categoryService.addToCategory({ title }),
		mutationKey: [categoryService.addToCategoryKey],
		onSuccess: () => {}
	})

	const onSubmit = async (data: createCategorySchemaType) => {
		const { toast } = await import('react-hot-toast')

		try {
			await mutateAsync(data.title)
		} catch (e) {
			console.log(e)
			return
		}
		toast.success('уачное создание категории')
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
								<FormLabel className='text-xl pl-2'>category name</FormLabel>
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

export default CreateCategoryPage
