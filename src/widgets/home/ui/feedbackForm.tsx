'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { FeedbackFormType, FeedbackSchema } from '~/shared/types/fedbackform'
import styles from '~/shared/styles/Home.module.scss'
import {
	Button,
	Container,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
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
		<div className={styles.feedback}>
			<Container>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							name='email'
							control={form.control}
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2 '>
									<FormLabel>Ваш email</FormLabel>
									<FormControl>
										<Input {...field} type='email' placeholder='Введите email' />
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
									<FormLabel>Ваш email</FormLabel>
									<FormControl>
										<Input {...field} type='email' placeholder='Введите name' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit'>Отправить</Button>
					</form>
				</Form>
			</Container>
		</div>
	)
}

export default FeedbackSection
