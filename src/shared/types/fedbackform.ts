import { z } from 'zod'

export type FeedbackFormType = z.infer<typeof FeedbackSchema>

export const FeedbackSchema = z.object({
   email: z
      .string()
      .email('не корректный email')
      .min(6, 'не корректный email, должно быть минимум 6 символов')
      .max(255),
   title: z
      .string()
      .min(2, 'не корректное имя, должно быть минимум 2 символов')
})